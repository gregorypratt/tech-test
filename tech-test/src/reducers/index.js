import { combineReducers } from 'redux';
import liveEvents from './live-events';
import selectedEvent from './selected-event';
import price from './price';
import error from './error';

export default combineReducers({
  liveEvents,
  selectedEvent,
  price,
  error
});
