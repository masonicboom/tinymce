import * as Css from './Css';
import { SugarElement } from '../node/SugarElement';

const onDirection = <T = any> (isLtr: T, isRtl: T) => (element: SugarElement<Element>): T =>
  getDirection(element) === 'rtl' ? isRtl : isLtr;

const getDirection = (element: SugarElement<Element>): 'rtl' | 'ltr' =>
  Css.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';

export {
  onDirection,
  getDirection
};
