import * as gameActions from '../actions/game.actions';
import {IGame, InitialGame} from '../../models/models';
import {Game} from '../../models/game';

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

export function GameReducer(state: GameState = InitialGameState, action: gameActions.PoolActions): GameState {
  switch (action.type) {
    case gameActions.START_GAME:
      return {
        ...state,
        loading: true
      };
    case gameActions.START_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        game: action.payload
      };
    case gameActions.START_GAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case gameActions.VERIFY_GAME:
      return {
        ...state,
        loading: true
      };
    case gameActions.VERIFY_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        game: action.payload
      };
    case gameActions.VERIFY_GAME_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getLoading = (state: GameState): boolean => state.loading;
export const getGame = (state: GameState): Game => state.game;
