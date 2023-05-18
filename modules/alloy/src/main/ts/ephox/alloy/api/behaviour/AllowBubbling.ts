import { EventUnbinder } from '@ephox/sugar';

import * as Behaviour from './Behaviour';
import * as ActiveAllowBubbling from '../../behaviour/allowbubbling/ActiveAllowBubbling';
import AllowBubblingSchema from '../../behaviour/allowbubbling/AllowBubblingSchema';
import { AllowBubblingBehavior } from '../../behaviour/allowbubbling/AllowBubblingTypes';
import { SetupBehaviourCellState } from '../../behaviour/common/BehaviourCellState';

const AllowBubbling: AllowBubblingBehavior = Behaviour.create({
  fields: AllowBubblingSchema,
  name: 'allowbubbling',
  active: ActiveAllowBubbling,
  state: SetupBehaviourCellState([] as EventUnbinder[])
});

export { AllowBubbling };
