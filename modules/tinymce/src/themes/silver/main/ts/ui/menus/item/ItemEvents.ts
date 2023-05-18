import { AlloyEvents, AlloyTriggers, EventFormat, SystemEvents } from '@ephox/alloy';

import ItemResponse from './ItemResponse';
import { GetApiType, runWithApi } from '../../controls/Controls';

export interface OnMenuItemExecuteType<T> extends GetApiType<T> {
  readonly onAction: (itemApi: T) => void;
  readonly triggersSubmenu: boolean;
}

// Perform `action` when an item is clicked on, close menus, and stop event
const onMenuItemExecute = <T>(info: OnMenuItemExecuteType<T>, itemResponse: ItemResponse): AlloyEvents.AlloyEventKeyAndHandler<EventFormat> =>
  AlloyEvents.runOnExecute((comp, simulatedEvent) => {
    // If there is an action, run the action
    runWithApi(info, comp)(info.onAction);
    if (!info.triggersSubmenu && itemResponse === ItemResponse.CLOSE_ON_EXECUTE) {
      if (comp.getSystem().isConnected()) {
        AlloyTriggers.emit(comp, SystemEvents.sandboxClose());
      }
      simulatedEvent.stop();
    }
  });

const menuItemEventOrder: Record<string, string[]> = {
  // TODO: use the constants provided by behaviours.
  [SystemEvents.execute()]: [ 'disabling', 'alloy.base.behaviour', 'toggling', 'item-events' ]
};

export { onMenuItemExecute, menuItemEventOrder };
