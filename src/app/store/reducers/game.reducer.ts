import * as gameActions from '../actions/game.actions';
import {IGame, InitialGame} from '../../models/models';

export interface GameState {
  game: IGame;
  loading: boolean;
  error: any;
}

export const InitialGameState: GameState = {
  game: InitialGame,
  loading: false,
  error: null
};

export function GameReducer(state = InitialGameState, action: gameActions.PoolActions): GameState {
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
        loading: false
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
export const getGame = (state: GameState): IGame => state.game;
