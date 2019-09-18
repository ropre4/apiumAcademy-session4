import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../store/reducers';
import * as gameActions from '../../store/actions/game.actions';

@Injectable({
  providedIn: 'root'
})
export class GameActionService {

  constructor(private store: Store<GlobalState>) {
  }

  public start(gameType: string): void {
    this.store.dispatch(new gameActions.StartGame(gameType));
  }

  public verify(sequence: number[]): void {
    this.store.dispatch(new gameActions.VerifyGame(sequence));
  }

}
