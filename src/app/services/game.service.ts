import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IGame} from '../models/models';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private serverUrl = 'http://localhost:4201';

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  public startGame(type: string): Observable<IGame> {
    return this.http.get<IGame>(this.serverUrl + '/start/' + type).pipe(tap((game: IGame) => {
      this.userService.onValidSequence(game.sequence.length - 1);
    }));
  }

  public verify(sequence: number[]): Observable<IGame> {
    return this.http.post<IGame>(this.serverUrl + '/verify', sequence).pipe(tap((game: IGame) => {
      this.userService.onValidSequence(game.sequence.length - 1);
    }));
  }

}
