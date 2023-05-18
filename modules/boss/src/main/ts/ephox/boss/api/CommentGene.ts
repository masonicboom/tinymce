import { Gene } from './Gene';
import { GeneTypes } from '../mutant/Properties';

export const CommentGene = (id: string, text: string): Gene => {
  return Gene(id, GeneTypes.Comment, [], {}, {}, text);
};
