import { Singleton } from '@ephox/katamari';

import { BlockingState } from './BlockingTypes';
import { nuState } from '../common/BehaviourState';

export const init = (): BlockingState => {
  const blocker = Singleton.destroyable();

  const blockWith = (destroy: () => void) => {
    blocker.set({ destroy });
  };

  return nuState({
    readState: blocker.isSet,
    blockWith,
    clear: blocker.clear,
    isBlocked: blocker.isSet
  });
};
