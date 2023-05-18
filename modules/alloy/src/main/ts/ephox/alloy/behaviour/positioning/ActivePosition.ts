import { PositioningConfig } from './PositioningTypes';
import { DomDefinitionDetail } from '../../dom/DomDefinition';
import * as DomModification from '../../dom/DomModification';

const exhibit = (base: DomDefinitionDetail, posConfig: PositioningConfig): DomModification.DomModification =>
  DomModification.nu({
    classes: [ ],
    styles: posConfig.useFixed() ? { } : { position: 'relative' }
  });

export {
  exhibit
};
