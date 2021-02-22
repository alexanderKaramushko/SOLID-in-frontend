// eslint-disable-next-line import/no-cycle
import { GameTypes } from './types/types';

export enum Types {
  SCISSORS = 'SCISSORS',
  STONE = 'STONE',
  PAPER = 'PAPER',
}

export enum Codes {
  DRAW = 'Ничья',
  GAMEOVER = 'Проигрыш',
  VICTORY = 'Победа',
}

export interface Result {
  rivalType: GameTypes;
  code: Codes;
}
