import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IUser {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  private bestSequenceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private bestSequenceState = 0;

  constructor() { }

  public setUser(user: IUser): void {
    this.userSubject.next(user);
  }

  public getUser(): Observable<IUser> {
    return this.userSubject;
  }

  public onValidSequence(sequence: number): void {
    if (this.bestSequenceState < sequence) {
      this.bestSequenceState = sequence;
      this.bestSequenceSubject.next(this.bestSequenceState);
    }
  }

  public getBestSequence(): Observable<number> {
    return this.bestSequenceSubject;
  }

}
