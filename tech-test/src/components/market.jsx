import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';

import Outcomes from './outcomes';

class Market extends PureComponent {
  elem = React.createRef();

  componentDidMount() {
    const {
      market: {
        marketId
      },
      outcomes = []
    } = this.props;

    if ('IntersectionObserver' in window) {
      let io;
      io = new IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          if (outcomes.length === 0) {
            this.props.dispatch(actions.fetchMarket(marketId));
          }

          io.disconnect();
          io = null;
        }
      });

      io.observe(this.elem.current);
    }
  }

  updateOutcomes({ data }) {
    console.log(data);
  }

  render() {
    const {
      market: {
        name
      },
      outcomes = []
    } = this.props;

    return (
      <section className="c-card" ref={this.elem}>
        <div role="separator" className="c-card__item c-card__item--divider">
          {name}
        </div>
        <div className="c-card__item">
          <Outcomes outcomes={outcomes} />
        </div>
      </section>
    );
  }
}

export default connect()(Market);
