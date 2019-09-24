import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {GlobalState} from '../../store/reducers/index';
import {Observable} from 'rxjs';
import * as gameSelectors from '../../store/selectors/game.selectors';
import {IGame} from '../../models/models';
import {Game} from '../../models/game';

@Injectable()
export class GameSelectorService {

  constructor(private store: Store<GlobalState>) {
  }
  // Form 1 (using selector)
  public getLoading(): Observable<boolean> {
    return this.store.pipe(select(gameSelectors.getLoading));
  }

  // Form 2 (not using selector)
  public getGame(): Observable<Game> {
    return this.store.select((state: GlobalState) => state.game.game);
  }

}
