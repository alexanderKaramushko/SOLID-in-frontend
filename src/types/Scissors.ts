import Type from './Type';
import { Types } from '../types';

class Scissors extends Type {

  private DOMType!: HTMLElement;
  private defeatTypes: Types[] = [Types.STONE];
  private type: Types = Types.SCISSORS;

  getType(): Types {
    return this.type;
  }

  getDefeatTypes(): Types[] {
    return this.defeatTypes;
  }

  getDOMType(): HTMLElement {
    this.DOMType = document.createElement('div');

    this.DOMType.classList.add('type');
    this.DOMType.style.cssText = 'background-image: url("data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'iso-8859-1\'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version=\'1.1\' id=\'Capa_1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' viewBox=\'0 0 468.293 468.293\' style=\'enable-background:new 0 0 468.293 468.293;\' xml:space=\'preserve\'%3E%3Cg%3E%3Cpath style=\'fill:%23E1E6E9;\' d=\'M284.381,289.951l-41.014,23.68L106.103,101.871C92.012,80.364,76.622,12.856,98.89,0l0,0 L284.381,289.951z\'/%3E%3Cpath style=\'fill:%23E1E6E9;\' d=\'M184.922,287.949l41.014,23.68l136.253-209.757C376.281,80.364,391.67,12.856,369.403,0l0,0 L184.922,287.949z\'/%3E%3C/g%3E%3Cg%3E%3Cpath style=\'fill:%23E56353;\' d=\'M23.62,337.842c-30.952,41.689-16.157,100.354,30.09,122.64 c38.81,18.702,85.592,2.533,107.133-34.776c22.917-39.694,57.973-100.412,68.517-118.676c1.725-2.988,0.683-6.776-2.305-8.501 l-30.395-17.549c-2.81-1.622-6.394-0.823-8.249,1.839l-36.374,52.208c-9.902-12.06-23.35-21.738-40.527-26.683 C79.219,299.047,43.651,310.862,23.62,337.842z M44.788,361.301c14.095-24.413,45.311-32.777,69.724-18.682 s32.777,45.312,18.683,69.724C119.1,436.756,87.883,445.12,63.47,431.025C39.058,416.931,30.693,385.714,44.788,361.301z\'/%3E%3Cpath style=\'fill:%23E56353;\' d=\'M356.782,308.344c-17.176,4.945-30.624,14.623-40.527,26.683l-36.374-52.208 c-1.855-2.662-5.439-3.461-8.249-1.839l-30.395,17.549c-2.988,1.725-4.03,5.513-2.305,8.501 c10.544,18.264,45.6,78.982,68.517,118.676c21.54,37.309,68.323,53.478,107.133,34.776c46.247-22.286,61.042-80.951,30.09-122.64 C424.641,310.862,389.073,299.047,356.782,308.344z M404.822,431.025c-24.413,14.095-55.629,5.73-69.724-18.683 c-14.095-24.413-5.73-55.63,18.683-69.724c24.413-14.095,55.629-5.73,69.724,18.682C437.6,385.714,429.235,416.931,404.822,431.025 z\'/%3E%3C/g%3E%3Ccircle style=\'fill:%2364798A;\' cx=\'233.903\' cy=\'249.444\' r=\'12.488\'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");';

    return this.DOMType;
  }

}

export default Scissors;
