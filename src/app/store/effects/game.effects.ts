import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as GameActions from '../actions/game.actions';
import {GameService} from '../../services/game.service';
import {Action} from '@ngrx/store';
import {Game} from '../../models/game';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameService: GameService,
  ) { }

  public startGame$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.StartGame),
      switchMap((action) => {
        return this.gameService.startGame(action.gameType).pipe(
          map((game: Game) => GameActions.StartGameSuccess({payload: game})),
          catchError((error: Error) => of(GameActions.StartGameFail({ payload: error.message }))),
        );
      })
    )
  );


  public verifyGame$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.VerifyGame),
      switchMap((action) => {
        return this.gameService.verify(action.sequence).pipe(
          map((game: Game) => GameActions.VerifyGameSuccess({payload: game})),
          catchError(error => of(GameActions.VerifyGameFail(error))),
        );
      }),
    )
  );
}
