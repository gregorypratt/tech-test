import reducer from './live-events';
import actions from '../actions';

const state = {
  test: 'value'
};

const events = { 1234: [{ a: 1 }, { b: 2 }] };

const expectedState = {
  ...state,
  ...events
};

describe('Live events reducer', () => {
  it('returns same state if not match on action type', () => {
    const newState = reducer(state, actions.receivedEvent());
    expect(newState).toEqual(state);
  });

  it('returns updated state', () => {
    const newState = reducer(state, actions.receivedLiveEvents(events));
    expect(newState).toEqual(expectedState);
  });
});