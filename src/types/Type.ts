import { Types } from '../types';

abstract class Type {

  abstract getType(): Types;

  abstract getDOMType(): HTMLElement;

}

export default Type;
