import {IGame, STATUS} from './models';

export class Game implements IGame {


  private _sequence: number[];
  private _userSequence: number[];
  private _status: STATUS;

  constructor(sequence: number[], userSequence: number[], status: STATUS) {

    if (!Array.isArray(sequence)) {
      throw new Error('Invalid sequence!');
    }
    if (!Array.isArray(userSequence)) {
      throw new Error('Invalid user sequence!');
    }
    if (Object.values(STATUS).indexOf(status) === -1) {
      throw new Error('Invalid status!');
    }

    this._sequence = sequence;
    this._userSequence = userSequence;
    this._status = status;
  }

  static FromBackend(game: IGame): Game {
    return new Game(game.sequence, [], game.status);
  }

  get sequence(): number[] {
    return this._sequence;
  }

  get status(): STATUS {
    return this._status;
  }

  get userSequence(): number[] {
    return this._userSequence;
  }

  public addUserStep(value: number): Game {
    return new Game(this.sequence, [...this.userSequence, value], this.status);
  }

  public removeUserSequence(): Game {
    return new Game(this.sequence, [], this.status);
  }

  public isReadyToVerify(): boolean {
    return this.userSequence.length === this.sequence.length;
  }

}
