import React, { PureComponent } from 'react';

import Price from './price';

class PrimaryMarkets extends PureComponent {
  renderOutcomes() {
    const { outcomes = [] } = this.props;

    return outcomes.map((outcome, i) => {
      if (!outcome) return null;

      const home = outcome.find(outcome => outcome.type === 'home') || {};
      const draw = outcome.find(outcome => outcome.type === 'draw') || {};
      const away = outcome.find(outcome => outcome.type === 'away') || {};
      return (
        <div key={i} className="o-grid u-centered u-letter-box-medium">
          <div className="o-grid__cell o-grid__cell--width-33">
            Win <Price {...home.price} />
          </div>
          <div className="o-grid__cell o-grid__cell--width-33">
            Draw <Price {...draw.price} />
          </div>
          <div className="o-grid__cell o-grid__cell--width-33">
            Win <Price {...away.price} />
          </div>
        </div>
      )
    });
  }

  render() {
    const { markets = [] } = this.props;
    return markets.map(() => this.renderOutcomes());
  }
}

export default PrimaryMarkets;
