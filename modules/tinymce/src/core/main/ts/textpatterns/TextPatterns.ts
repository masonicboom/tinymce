import * as Keyboard from './keyboard/Keyboard';
import Editor from '../api/Editor';

const setup = (editor: Editor): void => {
  Keyboard.setup(editor);
};

export {
  setup
};
