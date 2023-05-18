import { Fun } from '@ephox/katamari';

import { EventHandler, EventUnbinder } from './Types';
import * as FilteredEvent from '../../impl/FilteredEvent';
import { SugarElement } from '../node/SugarElement';

const filter = Fun.always; // no filter on plain DomEvents

const bind: {
  <K extends keyof HTMLElementEventMap, T extends Node | Window = Node> (element: SugarElement<EventTarget>, event: K, handler: EventHandler<HTMLElementEventMap[K], T>): EventUnbinder;
  <E extends Event, T extends Node | Window = Node>(element: SugarElement<EventTarget>, event: string, handler: EventHandler<E, T>): EventUnbinder;
} = <E extends Event, T extends Node | Window = Node>(element: SugarElement<EventTarget>, event: string, handler: EventHandler<E, T>): EventUnbinder =>
  FilteredEvent.bind<E, T>(element, event, filter, handler);

const capture: {
  <K extends keyof HTMLElementEventMap, T extends Node | Window = Node> (element: SugarElement<EventTarget>, event: K, handler: EventHandler<HTMLElementEventMap[K], T>): EventUnbinder;
  <E extends Event, T extends Node | Window = Node>(element: SugarElement<EventTarget>, event: string, handler: EventHandler<E, T>): EventUnbinder;
} = <E extends Event, T extends Node | Window = Node>(element: SugarElement<EventTarget>, event: string, handler: EventHandler<E, T>): EventUnbinder =>
  FilteredEvent.capture<E, T>(element, event, filter, handler);

const fromRawEvent = FilteredEvent.fromRawEvent;

export {
  bind,
  capture,
  fromRawEvent
};
