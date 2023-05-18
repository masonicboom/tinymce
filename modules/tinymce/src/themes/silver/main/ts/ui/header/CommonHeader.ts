import { AlloySpec, Behaviour, SimpleSpec } from '@ephox/alloy';

import Editor from 'tinymce/core/api/Editor';

import * as StaticHeader from './StaticHeader';
import * as StickyHeader from './StickyHeader';
import { UiFactoryBackstageShared } from '../../backstage/Backstage';

export interface HeaderSpec extends SimpleSpec {
  sticky: boolean;
  editor: Editor;
  sharedBackstage: UiFactoryBackstageShared;
}

const renderHeader = (spec: HeaderSpec): AlloySpec => {
  const editor = spec.editor;
  const getBehaviours = spec.sticky ? StickyHeader.getBehaviours : StaticHeader.getBehaviours;
  return {
    uid: spec.uid,
    dom: spec.dom,
    components: spec.components,
    behaviours: Behaviour.derive(getBehaviours(editor, spec.sharedBackstage))
  };
};

export { renderHeader };
