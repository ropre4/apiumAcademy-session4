import {Component, OnDestroy, OnInit} from '@angular/core';
import { IGame, InitialGame, STATUS } from '../../models/models';
import {GameService} from '../../services/game.service';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';

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

  public currentGame: IGame;
  public userSequence: number[] = [];
  public bestSequence: number;
  public tiles: ITile[];
  public subscriptions: Subscription[] = [];
  public allStatus = STATUS;

  constructor(
    private gameService: GameService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initTiles();
    this.currentGame = InitialGame;
    this.subscriptions.push(this.userService.getBestSequence().subscribe((x: number) => {
      this.bestSequence = x;
    }));
  }

  startGame(type: string) {
    this.subscriptions.push(
      this.gameService.startGame(type).subscribe(
        (game: IGame) => {
        this.currentGame = game;
        this.playSequence();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  onClick(index: number) {
    this.userSequence.push(index);
    if (this.userSequence.length === this.currentGame.sequence.length) {
      this.subscriptions.push(this.gameService.verify(this.userSequence).subscribe((game: IGame) => {
        this.currentGame = game;
        this.userSequence = [];
        this.playSequence();
      }));
    }
  }

  playSequence(): void {
    this.currentGame.sequence.concat(null).map((value: number, index: number) => {
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
    this.userSequence = [];
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
    this.userSequence = [];
    this.playSequence();
  }
}
