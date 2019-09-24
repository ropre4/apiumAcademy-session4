import { createAction, props } from '@ngrx/store';
import {Game} from '../../models/game';

export const START_GAME = '[GAME] Start';
export const START_GAME_FAIL = '[GAME] Start Fail';
export const START_GAME_SUCCESS = '[GAME] Start Success';

export const VERIFY_GAME = '[GAME] Verify';
export const VERIFY_GAME_FAIL = '[GAME] Verify Fail';
export const VERIFY_GAME_SUCCESS = '[GAME] Verify Success';

export const StartGame = createAction(
  START_GAME,
  props<{ gameType: string }>()
);

export const StartGameFail = createAction(
  START_GAME_FAIL,
  props<{ payload: any }>()
);

export const StartGameSuccess = createAction(
  START_GAME_SUCCESS,
  props<{ payload: Game }>()
);

export const VerifyGame = createAction(
  VERIFY_GAME,
  props<{ sequence: number[] }>()
);

export const VerifyGameFail = createAction(
  VERIFY_GAME_FAIL,
  props<{ payload: any }>()
);


export const VerifyGameSuccess = createAction(
  VERIFY_GAME_SUCCESS,
  props<{ payload: any }>()
);
