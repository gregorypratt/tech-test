import { sortBy, prop } from 'ramda';

const getEvents = ({ liveEvents = {} }) => {
  let events = sortBy(prop('displayOrder'))(liveEvents.events || []);

  if (!liveEvents.markets) {
    return events;
  }

  return events.map(event => {
    event.markets = liveEvents.markets[event.eventId];
    event.outcomes = event.markets.map(market => liveEvents.outcomes[market.marketId]);
    return event;
  });
};

export {
  getEvents
};