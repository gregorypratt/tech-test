import actions from '../constants/actions';

export default {
  error: (error) => ({
    type: actions.ERROR,
    payload: {
      error
    }
  }),

  fetchLiveEvents: (primaryMarkets) => ({
    type: actions.FETCH_LIVE_EVENTS,
    payload: {
      primaryMarkets
    }
  }),

  receivedLiveEvents: (events) => ({
    type: actions.RECEIVED_LIVE_EVENTS,
    payload: {
      events
    }
  }),

  fetchEvent: (eventId) => ({
    type: actions.FETCH_EVENT,
    payload: {
      eventId
    }
  }),

  receivedEvent: (event) => ({
    type: actions.RECEIVED_EVENT,
    payload: {
      event
    }
  }),

  fetchMarket: (marketId) => ({
    type: actions.FETCH_MARKET,
    payload: {
      marketId
    }
  }),

  receivedMarket: (market) => ({
    type: actions.RECIEVED_MARKET,
    payload: {
      market
    }
  }),

  togglePrices: () => ({
    type: actions.TOGGLE_PRICES
  }),

  openEvent: (selectedEvent) => ({
    type: actions.OPENED_EVENT,
    payload: {
      selectedEvent
    }
  }),

  closeEvent: () => ({
    type: actions.CLOSED_EVENT
  }),

  socketMessage: ({ type, data }) => ({
    type,
    payload: data
  })
};
