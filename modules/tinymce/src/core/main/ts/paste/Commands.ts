import { Cell } from '@ephox/katamari';

import * as Clipboard from './Clipboard';
import Editor from '../api/Editor';
import * as Events from '../api/Events';

const togglePlainTextPaste = (editor: Editor, pasteFormat: Cell<string>): void => {
  if (pasteFormat.get() === 'text') {
    pasteFormat.set('html');
    Events.firePastePlainTextToggle(editor, false);
  } else {
    pasteFormat.set('text');
    Events.firePastePlainTextToggle(editor, true);
  }
  editor.focus();
};

const register = (editor: Editor, pasteFormat: Cell<string>): void => {
  editor.addCommand('mceTogglePlainTextPaste', () => {
    togglePlainTextPaste(editor, pasteFormat);
  });

  editor.addCommand('mceInsertClipboardContent', (ui, value) => {
    if (value.html) {
      Clipboard.pasteHtml(editor, value.html, value.internal);
    }

    if (value.text) {
      Clipboard.pasteText(editor, value.text);
    }
  });
};

export {
  register
};
