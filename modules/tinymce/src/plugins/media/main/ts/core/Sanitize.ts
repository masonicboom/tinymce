import Editor from 'tinymce/core/api/Editor';
import AstNode from 'tinymce/core/api/html/Node';

import { Parser } from './Parser';
import * as Options from '../api/Options';

const parseAndSanitize = (editor: Editor, context: string, html: string): AstNode => {
  const getEditorOption = editor.options.get;
  const sanitize = getEditorOption('xss_sanitization');
  const validate = Options.shouldFilterHtml(editor);
  return Parser(editor.schema, { sanitize, validate }).parse(html, { context });
};

export {
  parseAndSanitize
};
