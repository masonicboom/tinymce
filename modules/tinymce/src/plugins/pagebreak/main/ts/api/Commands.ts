import Editor from 'tinymce/core/api/Editor';

import * as Options from './Options';
import * as FilterContent from '../core/FilterContent';

const register = (editor: Editor): void => {
  editor.addCommand('mcePageBreak', () => {
    editor.insertContent(FilterContent.getPlaceholderHtml(Options.shouldSplitBlock(editor)));
  });
};

export {
  register
};
