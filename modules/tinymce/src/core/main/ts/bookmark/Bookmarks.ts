import { Bookmark } from './BookmarkTypes';
import * as GetBookmark from './GetBookmark';
import * as ResolveBookmark from './ResolveBookmark';
import EditorSelection from '../api/dom/Selection';
import * as NodeType from '../dom/NodeType';

const getBookmark = (selection: EditorSelection, type?: number, normalized?: boolean): Bookmark => {
  return GetBookmark.getBookmark(selection, type, normalized);
};

const moveToBookmark = (selection: EditorSelection, bookmark: Bookmark): void => {
  ResolveBookmark.resolve(selection, bookmark).each(({ range, forward }) => {
    selection.setRng(range, forward);
  });
};

const isBookmarkNode = (node: Node | null): boolean => {
  return NodeType.isElement(node) && node.tagName === 'SPAN' && node.getAttribute('data-mce-type') === 'bookmark';
};

export {
  getBookmark,
  moveToBookmark,
  isBookmarkNode
};
