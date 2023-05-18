import { ReflectingConfig, ReflectingState } from './ReflectingTypes';
import { AlloyComponent } from '../../api/component/ComponentApi';

const getState = <I, S>(component: AlloyComponent, replaceConfig: ReflectingConfig<I, S>, reflectState: ReflectingState<S>): ReflectingState<S> =>
  reflectState;

export {
  getState
};
