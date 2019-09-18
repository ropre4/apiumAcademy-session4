import {createFeatureSelector, createSelector} from '@ngrx/store';

import {GlobalState} from '../reducers';
import * as fromGameReducer from '../reducers/game.reducer';
import {GameState} from '../reducers/game.reducer';

export const getGameState = createFeatureSelector<GameState>(
  'game',
);

export const getLoading = createSelector(
  getGameState,
  fromGameReducer.getLoading,
);

export const getGame = createSelector(
  getGameState,
  fromGameReducer.getGame,
);
