import Game from './Game';
import './styles.scss';
import Paper from './types/Paper';
import Scissors from './types/Scissors';
import Stone from './types/Stone';
import View from './View';

const game = new Game([
  new Paper(),
  new Scissors(),
  new Stone(),
]);

const view = new View(game);

view.initGameView();
