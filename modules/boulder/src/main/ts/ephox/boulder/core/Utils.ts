import { Fun } from '@ephox/katamari';

import * as SchemaError from './SchemaError';
import { StructureProcessor, ValueValidator } from './StructureProcessor';
import { SimpleResult } from '../alien/SimpleResult';

const value = (validator: ValueValidator): StructureProcessor => {
  const extract = (path, val) => {
    return SimpleResult.bindError(
      validator(val),
      (err) => SchemaError.custom(path, err)
    );
  };

  const toString = Fun.constant('val');

  return {
    extract,
    toString
  };
};

const anyValue: StructureProcessor = value(SimpleResult.svalue);

export {
  anyValue,
  value
};
