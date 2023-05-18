import { Fun, Singleton } from '@ephox/katamari';

import { SandboxingState } from './SandboxingTypes';
import { AlloyComponent } from '../../api/component/ComponentApi';
import { nuState } from '../common/BehaviourState';

const init = (): SandboxingState => {
  const contents = Singleton.value<AlloyComponent>();

  const readState = Fun.constant('not-implemented');

  return nuState({
    readState,
    isOpen: contents.isSet,
    clear: contents.clear,
    set: contents.set,
    get: contents.get
  });
};

export {
  init
};
