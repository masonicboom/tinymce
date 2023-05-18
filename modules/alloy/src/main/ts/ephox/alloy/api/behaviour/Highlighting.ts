import * as Behaviour from './Behaviour';
import * as HighlightApis from '../../behaviour/highlighting/HighlightApis';
import { HighlightingBehaviour } from '../../behaviour/highlighting/HighlightingTypes';
import HighlightSchema from '../../behaviour/highlighting/HighlightSchema';

const Highlighting: HighlightingBehaviour = Behaviour.create({
  fields: HighlightSchema,
  name: 'highlighting',
  apis: HighlightApis
});

export {
  Highlighting
};
