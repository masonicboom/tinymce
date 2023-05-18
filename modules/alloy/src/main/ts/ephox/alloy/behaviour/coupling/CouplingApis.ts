import { Optional } from '@ephox/katamari';

import { CouplingState, CouplingConfig } from './CouplingTypes';
import { AlloyComponent } from '../../api/component/ComponentApi';

const getCoupled = (component: AlloyComponent, coupleConfig: CouplingConfig, coupleState: CouplingState, name: string): AlloyComponent =>
  coupleState.getOrCreate(component, coupleConfig, name);

const getExistingCoupled = (component: AlloyComponent, coupleConfig: CouplingConfig, coupleState: CouplingState, name: string): Optional<AlloyComponent> =>
  coupleState.getExisting(component, coupleConfig, name);

export {
  getCoupled,
  getExistingCoupled
};
