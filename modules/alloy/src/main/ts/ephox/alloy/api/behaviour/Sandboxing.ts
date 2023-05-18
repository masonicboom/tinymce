import * as Behaviour from './Behaviour';
import * as ActiveSandbox from '../../behaviour/sandboxing/ActiveSandbox';
import * as SandboxApis from '../../behaviour/sandboxing/SandboxApis';
import { SandboxingBehaviour } from '../../behaviour/sandboxing/SandboxingTypes';
import SandboxSchema from '../../behaviour/sandboxing/SandboxSchema';
import * as SandboxState from '../../behaviour/sandboxing/SandboxState';

const Sandboxing: SandboxingBehaviour = Behaviour.create({
  fields: SandboxSchema,
  name: 'sandboxing',
  active: ActiveSandbox,
  apis: SandboxApis,
  state: SandboxState
});

export {
  Sandboxing
};
