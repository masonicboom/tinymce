import { StructureSchema, FieldSchema } from '@ephox/boulder';
import { Result } from '@ephox/katamari';

import { FormComponentWithLabel, FormComponentWithLabelSpec, formComponentWithLabelFields } from './FormComponent';
import * as ComponentSchema from '../../core/ComponentSchema';

export interface UrlInputSpec extends FormComponentWithLabelSpec {
  type: 'urlinput';
  filetype?: 'image' | 'media' | 'file';
  enabled?: boolean;
}

export interface UrlInput extends FormComponentWithLabel {
  type: 'urlinput';
  filetype: 'image' | 'media' | 'file';
  enabled: boolean;
}

export interface UrlInputData {
  value: string;
  meta: {
    text?: string;
  };
}

const urlInputFields = formComponentWithLabelFields.concat([
  FieldSchema.defaultedStringEnum('filetype', 'file', [ 'image', 'media', 'file' ]),
  ComponentSchema.enabled
]);

export const urlInputSchema = StructureSchema.objOf(urlInputFields);

export const urlInputDataProcessor = StructureSchema.objOf([
  ComponentSchema.value,
  ComponentSchema.defaultedMeta
]);

export const createUrlInput = (spec: UrlInputSpec): Result<UrlInput, StructureSchema.SchemaError<any>> =>
  StructureSchema.asRaw<UrlInput>('urlinput', urlInputSchema, spec);
