import * as Behaviour from './Behaviour';
import * as ActiveTabstopping from '../../behaviour/tabstopping/ActiveTabstopping';
import { TabstoppingBehaviour } from '../../behaviour/tabstopping/TabstoppingTypes';
import TabstopSchema from '../../behaviour/tabstopping/TabstopSchema';

const Tabstopping: TabstoppingBehaviour = Behaviour.create({
  fields: TabstopSchema,
  name: 'tabstopping',
  active: ActiveTabstopping
});

export {
  Tabstopping
};
