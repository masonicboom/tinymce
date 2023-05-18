import Editor from 'tinymce/core/api/Editor';

import * as Options from './Options';
import * as Dialog from '../ui/Dialog';

interface CommandOptions {
  readonly dialog?: boolean;
}

const register = (editor: Editor): void => {
  editor.addCommand('mceLink', (_ui, value?: CommandOptions) => {
    if (value?.dialog === true || !Options.useQuickLink(editor)) {
      Dialog.open(editor);
    } else {
      editor.dispatch('contexttoolbar-show', {
        toolbarKey: 'quicklink'
      });
    }
  });
};

export {
  register
};
