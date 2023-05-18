import { FieldProcessor } from '@ephox/boulder';

import { BodyComponent, BodyComponentSpec } from './BodyComponent';
import * as ComponentSchema from '../../core/ComponentSchema';

export interface BarSpec {
  type: 'bar';
  items: BodyComponentSpec[];
}

export interface Bar {
  type: 'bar';
  items: BodyComponent[];
}

export const createBarFields = (itemsField: FieldProcessor): FieldProcessor[] => [
  ComponentSchema.type,
  itemsField
];
