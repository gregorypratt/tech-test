import actionsTypes from '../constants/actions';
import API from '../services/api';
import actions from '../actions';

export default store => next => action => {
  const { dispatch } = store;

  switch (action.type) {
    case actionsTypes.FETCH_MARKET: {
      API.fetchMarket(action.payload.marketId)
        .then(market => dispatch(actions.receivedMarket(market)))
        .catch(error => {
          dispatch(actions.error(`There was a problem fetching single market - ${error.message}`));
        });

      return next(action);
    }

    default: return next(action);
  }
};
