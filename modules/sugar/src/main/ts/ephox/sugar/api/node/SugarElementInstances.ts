import { Eq, Pnode, Pprint, Testable } from '@ephox/dispute';

import { SugarElement } from './SugarElement';
import * as Html from '../properties/Html';

type Eq<A> = Eq.Eq<A>;
type Pprint<A> = Pprint.Pprint<A>;
type Testable<A> = Testable.Testable<A>;

export const eqElement = <T extends Node> (): Eq<SugarElement<T>> =>
  Eq.contramap(Eq.tripleEq, (e) => e.dom);

export const pprintElement = <T extends Node> (): Pprint<SugarElement<T>> =>
  Pprint.pprint<SugarElement<T>>((e) => Pnode.single(Html.getOuter(e)));

export const tElement = <T extends Node> (): Testable<SugarElement<T>> =>
  Testable.testable(eqElement(), pprintElement());
