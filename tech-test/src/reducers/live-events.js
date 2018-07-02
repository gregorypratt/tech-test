import actions from '../constants/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.RECEIVED_LIVE_EVENTS: {
      return {
        ...state,
        ...action.payload.events
      };
    }
    default:
  };

  return state;
};
