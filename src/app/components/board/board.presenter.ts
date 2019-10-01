import {BoardComponent} from './board.component';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';
import {Subscription} from 'rxjs';


export class BoardPresenter {

  public subscription = new Subscription();

  constructor(view: BoardComponent, gameService: GameService) {

    this.subscription.add(view.onStartGame$.subscribe({
      next: (type: string) => gameService.startGame(type)
    }));

    this.subscription.add(view.onStepClick$.subscribe({
      next: (index: number) => gameService.onNewStep(index)
    }));

    this.subscription.add(view.onResetSequence$.subscribe({
      next: _ => gameService.onResetUserSequence()
    }));

    this.subscription.add(gameService.game$.subscribe({
      next: (game: Game) => view.onNewGame(game)
    }));

  }

}
