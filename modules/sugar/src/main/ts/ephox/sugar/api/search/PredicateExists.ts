import * as PredicateFind from './PredicateFind';
import { SugarElement } from '../node/SugarElement';

const any = (predicate: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.first(predicate).isSome();

const ancestor = (scope: SugarElement<Node>, predicate: (e: SugarElement<Node>) => boolean, isRoot?: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.ancestor(scope, predicate, isRoot).isSome();

const closest = (scope: SugarElement<Node>, predicate: (e: SugarElement<Node>) => boolean, isRoot?: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.closest(scope, predicate, isRoot).isSome();

const sibling = (scope: SugarElement<Node>, predicate: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.sibling(scope, predicate).isSome();

const child = (scope: SugarElement<Node>, predicate: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.child(scope, predicate).isSome();

const descendant = (scope: SugarElement<Node>, predicate: (e: SugarElement<Node>) => boolean): boolean =>
  PredicateFind.descendant(scope, predicate).isSome();

export {
  any,
  ancestor,
  closest,
  sibling,
  child,
  descendant
};
