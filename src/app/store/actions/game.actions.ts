import { Action } from '@ngrx/store';
import {IGame} from '../../models/models';

export const START_GAME = '[GAME] Start';
export const START_GAME_FAIL = '[GAME] Start Fail';
export const START_GAME_SUCCESS = '[GAME] Start Success';

export const VERIFY_GAME = '[GAME] Verify';
export const VERIFY_GAME_FAIL = '[GAME] Verify Fail';
export const VERIFY_GAME_SUCCESS = '[GAME] Verify Success';

export class StartGame implements Action {
  public readonly type = START_GAME;
  constructor(public gameType: string) {
  }
}

export class StartGameFail implements Action {
  public readonly type = START_GAME_FAIL;
  constructor(public payload: any) {
  }
}

export class StartGameSuccess implements Action {
  public readonly type = START_GAME_SUCCESS;
  constructor(public payload: IGame) {
  }
}

export class VerifyGame implements Action {
  public readonly type = VERIFY_GAME;
  constructor(public sequence: number[]) {
  }
}

export class VerifyGameFail implements Action {
  public readonly type = VERIFY_GAME_FAIL;
  constructor(public payload: any) {
  }
}

export class VerifyGameSuccess implements Action {
  public readonly type = VERIFY_GAME_SUCCESS;
  constructor(public payload: IGame) {
  }
}

// this type is used in the reducer function
export type PoolActions =
  | StartGame
  | StartGameFail
  | StartGameSuccess
  | VerifyGame
  | VerifyGameFail
  | VerifyGameSuccess
  ;
