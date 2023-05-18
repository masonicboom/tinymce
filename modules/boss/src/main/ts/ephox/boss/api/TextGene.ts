import { Gene } from './Gene';
import { GeneTypes } from '../mutant/Properties';

export const TextGene = (id: string, text: string): Gene => {
  return Gene(id, GeneTypes.Text, [], {}, {}, text);
};
