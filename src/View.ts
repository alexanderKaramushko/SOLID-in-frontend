import Game from './Game';

class View {

  private DOMRivalType!: HTMLElement;
  private playerContainer!: HTMLElement | null;
  private rivalContainer!: HTMLElement | null;
  private status!: HTMLElement | null;
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  initGameView(): void {
    this.playerContainer = document.querySelector('.player');
    this.rivalContainer = document.querySelector('.rival');
    this.status = document.querySelector('.status');

    this.initGameTypes();
  }

  private initGameTypes(): void {
    const gameTypes = this.game.getTypes;

    gameTypes.forEach((type) => {
      const DOMType = type.getDOMType();

      DOMType.addEventListener('click', () => {
        const { code, rivalType } = this.game.makeRoshambo(type);

        if (this.DOMRivalType) {
          this.DOMRivalType.remove();
        }

        this.DOMRivalType = rivalType.getDOMType();

        if (this.rivalContainer) {
          this.rivalContainer.append(this.DOMRivalType);
        }

        if (this.status) {
          this.status.innerHTML = code;
        }
      });

      if (this.playerContainer) {
        this.playerContainer.append(DOMType);
      }
    });
  }

}

export default View;
