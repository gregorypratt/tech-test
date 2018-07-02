import React, { PureComponent } from 'react';

import Market from './market';

class Markets extends PureComponent {
  render() {
    const { event, markets, outcomes } = this.props;

    if (!markets) {
      return (
        <div className="u-centered u-text--quiet u-letter-box-super">
          Loading Markets...
        </div>
      );
    }

    let allMarkets = markets[event.eventId] || [];

    return allMarkets.map((market, i) =>
      <Market key={i} market={market} outcomes={outcomes[market.marketId]} />
    );
  }
}

export default Markets;
