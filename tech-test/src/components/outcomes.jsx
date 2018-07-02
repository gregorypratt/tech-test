import React, { PureComponent } from 'react';
import { sortBy, prop } from 'ramda';

import Price from './price';

class Outcomes extends PureComponent {
  render() {
    const {
      outcomes = []
    } = this.props;

    let orderedOutcomes = sortBy(prop('displayOrder'))(outcomes);

    return orderedOutcomes.map((outcome, i) =>
      <div key={i} className="o-grid u-letter-box-small">
        <div className="o-grid__cell o-grid__cell--width-75">
          {outcome.name}
        </div>
        <div className="o-grid__cell o-grid__cell--width-25 u-centered">
          <Price {...outcome.price} />
        </div>
      </div>
    );
  }
}

export default Outcomes;
