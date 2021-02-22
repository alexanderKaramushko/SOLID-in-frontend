import Randomizer from './Randomizer';
import { Codes, Result } from './types';
import { GameTypes } from './types/types';

class Game {

  private types: GameTypes[];

  constructor(types: GameTypes[]) {
    this.types = types;
  }

  get getTypes(): GameTypes[] {
    return this.types;
  }

  makeRoshambo(playerType: GameTypes): Result {
    return this.getGameResultFromTypes(playerType);
  }

  getGameResultFromTypes(playerType: GameTypes): Result {
    const defeatTypes = playerType.getDefeatTypes();
    const rivalType = this.getRandomRivalType();

    const isDefeat = defeatTypes.includes(rivalType.getType());

    if (isDefeat) {
      return {
        code: Codes.GAMEOVER,
        rivalType,
      };
    }

    const isDraw = playerType.getType() === rivalType.getType();

    if (isDraw) {
      return {
        code: Codes.DRAW,
        rivalType,
      };
    }

    return {
      code: Codes.VICTORY,
      rivalType,
    };
  }

  getRandomRivalType(): GameTypes {
    const randomIndex = Randomizer.generateRandomInteger(0, this.types.length - 1);

    return this.types[randomIndex];
  }

}

export default Game;
