const liveEventsUrl = 'http://localhost:8888/football/live';
const sportsBookEventUrl = 'http://localhost:8888/sportsbook/event/';
const sportsBookMarketUrl = 'http://localhost:8888/sportsbook/market/';

const getRequest = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  })
  .catch(error => error);

export default {
  fetchLiveEvents: (primaryMarkets) => {
    const primaryMarketsOption = primaryMarkets ? '?primaryMarkets=true' : '';
    return getRequest(liveEventsUrl + primaryMarketsOption);
  },
  fetchEvent: id => getRequest(`${sportsBookEventUrl}${id}`),
  fetchMarket: id => getRequest(`${sportsBookMarketUrl}${id}`)
};