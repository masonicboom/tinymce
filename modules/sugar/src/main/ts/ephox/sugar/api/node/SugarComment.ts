import { Optional } from '@ephox/katamari';

import { SugarElement } from './SugarElement';
import * as SugarNode from './SugarNode';
import { NodeValue } from '../../impl/NodeValue';

const api = NodeValue(SugarNode.isComment, 'comment');

const get = (element: SugarElement<Comment>): string =>
  api.get(element);

const getOption = (element: SugarElement<Node>): Optional<string> =>
  api.getOption(element);

const set = (element: SugarElement<Comment>, value: string): void =>
  api.set(element, value);

export {
  get,
  getOption,
  set
};
