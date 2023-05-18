import { FieldSchema, StructureProcessor, StructureSchema } from '@ephox/boulder';
import { Arr } from '@ephox/katamari';

import { getDataProcessor, getNamedItems } from './DataProcessors';
import { DialogData, DialogSpec } from '../components/dialog/Dialog';

export const createDataValidator = <T extends DialogData>(structure: DialogSpec<T>): StructureProcessor => {
  const namedItems = getNamedItems(structure);
  const fields = Arr.bind(namedItems, (item) => getDataProcessor(item).fold(
    () => [],
    (schema) => [ FieldSchema.requiredOf(item.name, schema) ]
  ));

  return StructureSchema.objOf(fields);
};
