import Editor from 'tinymce/core/api/Editor';

import * as Options from './Options';
import * as Actions from '../core/Actions';

const register = (editor: Editor): void => {
  editor.addCommand('mceInsertDate', (_ui, value) => {
    Actions.insertDateTime(editor, value ?? Options.getDateFormat(editor));
  });

  editor.addCommand('mceInsertTime', (_ui, value) => {
    Actions.insertDateTime(editor, value ?? Options.getTimeFormat(editor));
  });
};

export {
  register
};
