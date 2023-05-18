import { SugarElement } from '@ephox/sugar';

import { SlidingConfig } from './SlidingTypes';
import { AlloyComponent } from '../../api/component/ComponentApi';

export const getAnimationRoot = (component: AlloyComponent, slideConfig: SlidingConfig): SugarElement<Element> =>
  slideConfig.getAnimationRoot.fold(
    () => component.element,
    (get) => get(component)
  );
