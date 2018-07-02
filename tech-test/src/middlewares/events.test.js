import events from './events';
import API from '../services/api';
import actionsTypes from '../constants/actions';
import actions from '../actions';

const mockNext = (action) => action;
const mockDispatch = jest.fn();
const mockStore = { dispatch: mockDispatch };
const testAction = {
  type: actionsTypes.FETCH_LIVE_EVENTS,
  payload: { primaryMarkets: {} }
};

describe('Events middleware', () => {
  it('defaults to executing next with aciton', () => {
    const actionOut = events(mockStore)(mockNext)({ type: 'test' });
    expect(actionOut).toEqual({ type: 'test' });
  });

  it('calls the API executing next with aciton', (done) => {
    const testEvents = 'test';
    const mockFetchLiveEvents = jest.fn(() => Promise.resolve(testEvents));
    const mockReceivedLiveEvents = jest.fn();

    API.fetchLiveEvents = mockFetchLiveEvents;
    actions.receivedLiveEvents = mockReceivedLiveEvents;

    const actionOut = events(mockStore)(mockNext)(testAction);

    expect(actionOut).toEqual(testAction);
    expect(API.fetchLiveEvents).toHaveBeenCalled();
    process.nextTick(() => {
      expect(mockReceivedLiveEvents).toHaveBeenCalledWith(testEvents);
      expect(mockStore.dispatch).toHaveBeenCalled();
      done();
    });
  });

  it('calls the API and handles thrown error', (done) => {
    const mockFetchLiveEvents = jest.fn(() => Promise.reject({ message: 'oops' }));
    const mockErrorAction = jest.fn();
    
    API.fetchLiveEvents = mockFetchLiveEvents;
    actions.error = mockErrorAction;

    const actionOut = events(mockStore)(mockNext)(testAction);

    expect(actionOut).toEqual(testAction);
    expect(API.fetchLiveEvents).toHaveBeenCalled();
    process.nextTick(() => {
      expect(mockErrorAction).toHaveBeenCalled();
      expect(mockStore.dispatch).toHaveBeenCalled();
      done();
    });
  });
});