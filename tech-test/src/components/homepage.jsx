import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../selectors/events';
import actions from '../actions';

import Alert from './alert';
import Events from './events';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchLiveEvents());
  }

  showPrimaryMarkets() {
    this.props.dispatch(actions.fetchLiveEvents(true));
  }

  togglePrices() {
    this.props.dispatch(actions.togglePrices());
  }

  renderAlerts() {
    const { error, events = [] } = this.props;

    if (error) {
      return <Alert message="There was a problem fetching the live football events." />
    }

    if (events.length === 0) {
      return <Alert message="No events found." type="warning" />
    }
  }

  render() {
    return (
      <div className="o-container o-container--medium u-window-box-large">
        {this.renderAlerts()}
        <section role="menu" className="c-card c-card--menu" style={{ maxHeight: 'initial' }}>
          <header className="c-card__item c-card__item--brand">
            Live Events
          </header>
          <div className="c-card__item">
            <div className="c-input-group">
              <button className="c-button c-button--block c-button--info" onClick={() => this.showPrimaryMarkets()}>
                Show Primary Markets
              </button>
              <button className="c-button c-button--block" onClick={() => this.togglePrices()}>
                Toggle Prices
              </button>
            </div>
          </div>
          <Events />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: getEvents(state),
  error: state.error
});

export default connect(mapStateToProps)(HomePage);
