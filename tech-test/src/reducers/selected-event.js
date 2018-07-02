import actions from '../constants/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.OPENED_EVENT: {
      return {
        event: action.payload.selectedEvent
      }
    }
    case actions.RECEIVED_EVENT: {
      return action.payload.event;
    }
    case actions.RECIEVED_MARKET: {
      const outcomes = {
        ...state.outcomes,
        ...action.payload.market.outcomes
      };

      return {
        ...state,
        outcomes
      };
    }
    default:
  };

  return state;
};
