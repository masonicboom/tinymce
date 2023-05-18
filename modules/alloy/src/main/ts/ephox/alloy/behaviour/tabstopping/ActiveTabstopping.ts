import { Objects } from '@ephox/boulder';

import { TabstoppingConfig } from './TabstoppingTypes';
import { DomDefinitionDetail } from '../../dom/DomDefinition';
import * as DomModification from '../../dom/DomModification';

const exhibit = (base: DomDefinitionDetail, tabConfig: TabstoppingConfig): DomModification.DomModification =>
  DomModification.nu({
    attributes: Objects.wrapAll([
      { key: tabConfig.tabAttr, value: 'true' }
    ])
  });

export {
  exhibit
};
