import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IGame, STATUS} from '../models/models';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
import {delay, map, tap} from 'rxjs/operators';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private serverUrl = 'http://localhost:4201';

  public game: Game = Game.FromBackend({sequence: [], status: STATUS.not_started});


  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  public startGame(type: string): Observable<Game> {
    return this.http.get<IGame>(this.serverUrl + '/start/' + type).pipe(
      delay(1000),
      tap((game: IGame) => this.userService.onValidSequence(game.sequence.length - 1)),
      map((game: IGame) => Game.FromBackend(game))
    );
  }

  public verify(sequence: number[]): Observable<Game> {
    return this.http.post<IGame>(this.serverUrl + '/verify', sequence).pipe(
      delay(1000),
      tap((game: IGame) => this.userService.onValidSequence(game.sequence.length - 1)),
      map((game: IGame) => Game.FromBackend(game))
    );
  }

}
