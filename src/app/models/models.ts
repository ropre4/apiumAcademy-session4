
export enum STATUS {
  not_started = 'NOT_STARTED',
  failed = 'FAILED',
  ongoing = 'ONGOING',
  won = 'WON'
}

export interface IGame {
  sequence: number[];
  status: STATUS;
}

export const InitialGame: IGame = {
  status: STATUS.not_started,
  sequence: []
}

