import { Gene } from './Gene';
import { GeneTypes } from '../mutant/Properties';

export const SpecialGene = (id: string, children: Gene[]): Gene =>
  Gene(id, GeneTypes.Special, children, {}, {});