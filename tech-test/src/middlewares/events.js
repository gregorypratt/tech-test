import actionsTypes from '../constants/actions';
import API from '../services/api';
import actions from '../actions';

export default store => next => action => {
  const { dispatch } = store;

  switch (action.type) {
    case actionsTypes.FETCH_LIVE_EVENTS: {
      API.fetchLiveEvents(action.payload.primaryMarkets)
        .then(liveEvents => dispatch(actions.receivedLiveEvents(liveEvents)))
        .catch(error => {
          dispatch(actions.error(`There was a problem fetching the live events - ${error.message}`));
        });

      return next(action);
    }

    default: return next(action);
  }
};
