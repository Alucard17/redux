import { Signal, SignalActions } from './SignalActions';
import { SignalActionType } from './SignalActionType.enum';
import { ActionMeta, AnyMeta } from '../../foundations/ActionMeta';

// tag::RDX-type-signals[]
export type SignalState<SignalType extends Signal> = {
  byId: {
    [channel: string]: SignalType[];
  };
};
// end::RDX-type-signals[]

const createInitialState = <
  SignalType extends Signal
>(): SignalState<SignalType> => ({
  byId: {},
});

const signalReceived = <SignalType extends Signal>(
  state: SignalState<SignalType>,
  payload: SignalType
) => {
  const newState = {
    byId: { ...state.byId },
  };

  if (newState.byId[payload.channel] === undefined) {
    newState.byId[payload.channel] = [];
  }

  newState.byId[payload.channel] = [...newState.byId[payload.channel], payload];

  return newState;
};

// tag::RDX-reducer-signals[]
export const createSignalReducer = <
  SignalType extends Signal = Signal,
  SignalContentType extends object = {},
  Meta extends ActionMeta = AnyMeta
>() => (
  state: SignalState<SignalType> = createInitialState<SignalType>(),
  action: SignalActions<SignalType, SignalContentType, Meta>
): SignalState<SignalType> => {
  switch (action.type) {
    case SignalActionType.SIGNAL_RECEIVED:
      return signalReceived<SignalType>(state, action.payload);
    default:
      return state;
  }
};
// end::RDX-reducer-signals[]
