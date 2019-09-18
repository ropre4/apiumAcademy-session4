import { ActionReducerMap } from '@ngrx/store';

import * as fromGameReducer from './game.reducer';

export interface GlobalState {
  game: fromGameReducer.GameState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  game: fromGameReducer.GameReducer
}
