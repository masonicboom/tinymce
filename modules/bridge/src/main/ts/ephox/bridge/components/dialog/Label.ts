import { FieldProcessor } from '@ephox/boulder';

import { BodyComponent, BodyComponentSpec } from './BodyComponent';
import * as ComponentSchema from '../../core/ComponentSchema';

export interface LabelSpec {
  type: 'label';
  label: string;
  items: BodyComponentSpec[];
}

export interface Label {
  type: 'label';
  label: string;
  items: BodyComponent[];
}

export const createLabelFields = (itemsField: FieldProcessor): FieldProcessor[] => [
  ComponentSchema.type,
  ComponentSchema.label,
  itemsField
];
