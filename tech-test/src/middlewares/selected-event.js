import actionsTypes from '../constants/actions';
import API from '../services/api';
import actions from '../actions';

export default store => next => action => {
  const { dispatch } = store;

  switch (action.type) {
    case actionsTypes.OPENED_EVENT: {
      const { eventId } = action.payload.selectedEvent;
      API.fetchEvent(eventId)
        .then(event => dispatch(actions.receivedEvent(event)))
        .catch(error => {
          dispatch(actions.error(`There was a problem fetching single event - ${error.message}`));
        });

      return next(action);
    }

    default: return next(action);
  }
};
