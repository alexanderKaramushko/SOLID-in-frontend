import Type from './Type';
import { Types } from '../types';

class Stone extends Type {

  private DOMType!: HTMLElement;
  private defeatTypes: Types[] = [Types.PAPER];
  private type: Types = Types.STONE;

  getType(): Types {
    return this.type;
  }

  getDefeatTypes(): Types[] {
    return this.defeatTypes;
  }

  getDOMType(): HTMLElement {
    this.DOMType = document.createElement('div');

    this.DOMType.classList.add('type');
    this.DOMType.style.cssText = 'background-image: url("data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'iso-8859-1\'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version=\'1.1\' id=\'Capa_1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' viewBox=\'0 0 512 512\' style=\'enable-background:new 0 0 512 512;\' xml:space=\'preserve\'%3E%3Cg%3E%3Cpath style=\'fill:%238B8892;\' d=\'M377.655,147.841L205.609,3.095c-3.933-3.278-9.144-3.781-13.934-2.311L180.531,52.5l146.25,410.281 l23.533,48.023l39.749-68.648l11.25-217.094L377.655,147.841z\'/%3E%3Cpath style=\'fill:%238B8892;\' d=\'M307.094,434.656L49.688,177.25l-42.142,0.114l3.08,44.26L86,451.374L142,512h204 c1.465-0.406,2.888-0.802,4.314-1.196L307.094,434.656z\'/%3E%3C/g%3E%3Cg%3E%3Cpath style=\'fill:%23AEADB3;\' d=\'M1.586,189.284C0.542,191.369,0,193.669,0,196v210.985c0,4.726,2.225,9.175,6.006,12.012l121,90 c2.598,1.948,5.76,3.003,9.009,3.003H142L7.546,177.364L1.586,189.284z\'/%3E%3Cpath style=\'fill:%23AEADB3;\' d=\'M353.718,509.861l151.002-90c4.517-2.71,7.28-7.592,7.28-12.859v-91.024 c0-3.4-1.157-6.698-3.281-9.353l-121-150c-0.707-0.721-1.41-1.437-2.117-2.161l-7.947-6.623l-0.005,0.002L350.254,510.61 l0.06,0.194C351.438,510.493,352.563,510.182,353.718,509.861z\'/%3E%3C/g%3E%3Cpath style=\'fill:%23787780;\' d=\'M191.675,0.784c-0.786,0.242-1.626,0.042-2.377,0.417L69.291,61.582 c-2.904,1.452-5.257,3.805-6.709,6.709L7.546,177.364l342.768,333.441L191.675,0.784z\'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");';

    return this.DOMType;
  }

}

export default Stone;
