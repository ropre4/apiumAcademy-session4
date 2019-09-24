import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as GameActions from '../actions/game.actions';
import {GameService} from '../../services/game.service';
import {IGame} from '../../models/models';
import {Action} from '@ngrx/store';
import {Game} from '../../models/game';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameService: GameService,
  ) {
  }

  @Effect()
  public startGame$: Observable<Action> = this.actions$.pipe(
    ofType(GameActions.START_GAME),
    switchMap((action: GameActions.StartGame) => {
      return this.gameService.startGame(action.gameType).pipe(
        map((game: Game) => new GameActions.StartGameSuccess(game)),
        catchError((error: Error) => of(new GameActions.StartGameFail(error.message))),
      );
    }),
  );

  @Effect()
  public verifyGame$: Observable<Action> = this.actions$.pipe(
    ofType(GameActions.VERIFY_GAME),
    switchMap((action: GameActions.VerifyGame) => {
      return this.gameService.verify(action.sequence).pipe(
        map((game: Game) => new GameActions.VerifyGameSuccess(game)),
        catchError(error => of(new GameActions.VerifyGameFail(error))),
      );
    }),
  );
}
