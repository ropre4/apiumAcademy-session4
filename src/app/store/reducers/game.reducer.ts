import * as gameActions from '../actions/game.actions';
import {InitialGame} from '../../models/models';
import {Game} from '../../models/game';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';

export interface GameState {
  game: Game;
  loading: boolean;
  error: string;
}

export const InitialGameState: GameState = {
  game: Game.FromBackend(InitialGame),
  loading: false,
  error: null
};

const gameReducer: ActionReducer<GameState> = createReducer(
  InitialGameState,
  on(gameActions.StartGame, state => ( { ...state, loading: true }) ),
  on(gameActions.StartGameSuccess, (state, action) => ({ ...state, loading: false, game: action.payload }) ),
  on(gameActions.StartGameFail, (state, action) => ({ ...state, loading: false, error: action.payload }) ),
  on(gameActions.VerifyGame, state => ( { ...state, loading: true }) ),
  on(gameActions.VerifyGameSuccess, (state, action) => ({ ...state, loading: false, game: action.payload }) ),
  on(gameActions.VerifyGameFail, (state, action) => ({ ...state, loading: false, error: action.payload }) ),
);

export function reducer( state: GameState, action: Action ): GameState {
  return gameReducer(state, action);
}

export const getLoading = (state: GameState): boolean => state.loading;
export const getGame = (state: GameState): Game => state.game;
