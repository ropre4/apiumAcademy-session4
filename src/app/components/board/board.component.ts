import {Component, OnDestroy, OnInit} from '@angular/core';
import {STATUS} from '../../models/models';
import {GameService} from '../../services/game.service';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {GameActionService} from '../../services/actions/game.action-service';
import {GameSelectorService} from '../../services/selectors/game.selector-service';
import {Game} from '../../models/game';

interface ITile {
  index: number;
  color: string;
  active: boolean;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit, OnDestroy {

  public currentGame: Game = Game.FromBackend({sequence: [], status: STATUS.not_started});
  public bestSequence: number;
  public tiles: ITile[];
  public subscriptions: Subscription[] = [];
  public allStatus = STATUS;
  public loading = false;
  constructor(
    private gameService: GameService,
    private userService: UserService,
    private gameActionService: GameActionService,
    private gameSelectorService: GameSelectorService
  ) { }

  ngOnInit() {
    this.initTiles();
    this.subscriptions.push(this.userService.getBestSequence().subscribe((x: number) => {
      this.bestSequence = x;
    }));
    this.subscriptions.push(this.gameSelectorService.getGame().subscribe((game: Game) => {
      this.currentGame = game;
      this.playSequence(this.currentGame);
    }));
    this.subscriptions.push(this.gameSelectorService.getLoading().subscribe((loading: boolean) => {
      this.loading = loading;
    }));
  }

  startGame(type: string) {
    this.gameActionService.start(type);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  onClick(index: number) {
    this.currentGame = this.currentGame.addUserStep(index);
    if (this.currentGame.isReadyToVerify()) {
      this.gameActionService.verify(this.currentGame.userSequence);
    }
  }

  playSequence(game: Game): void {
    game.sequence.concat(null).map((value: number, index: number) => {
      if (value !== null) {
        setTimeout(() => this.setTilesAsNotActive(), (1000 * index) - 500);
        setTimeout(() => {
          const tileIndex = this.tiles.find((tile: ITile) => tile.index === value).index;
          this.tiles[tileIndex].active = true;
        }, 1000 * index);
      } else {
        setTimeout(() => this.setTilesAsNotActive(), (1000 * index) - 500);
      }
    });
  }
  initTiles(): void {
    this.tiles = [
      {
        index: 0,
        color: 'red',
        active: false
      },
      {
        index: 1,
        color: 'yellow',
        active: false
      },
      {
        index: 2,
        color: 'blue',
        active: false
      },
      {
        index: 3,
        color: 'green',
        active: false
      },
    ];
  }
  setTilesAsNotActive(): void {
    this.tiles.map((tile: ITile) => tile.active = false);
  }
  repeatSequence(): void {
    this.currentGame = this.currentGame.removeUserSequence();
    this.playSequence(this.currentGame);
  }
}
