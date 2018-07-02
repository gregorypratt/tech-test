import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import actions from '../actions';

import socket from '../services/websocket';
import Markets from './markets';

class EventDetails extends PureComponent {
  componentDidMount() {
    socket(this.props);
  }

  togglePrices() {
    this.props.dispatch(actions.togglePrices());
  }

  render() {
    const { selectedEvent, onClose } = this.props;
    const {
      event: {
        linkedEventTypeName,
        startTime,
        competitors,
        scores
      }
    } = selectedEvent;

    const homeTeam = competitors.find(c => c.position === 'home');
    const awayTeam = competitors.find(c => c.position === 'away');

    return (
      <div>
        <div aria-hidden className="c-overlay c-overlay--visible" onClick={() => onClose()}></div>
        <div role="dialog" className="o-modal o-modal--full o-modal--visible">
          <div className="c-card">
            <header className="c-card__header">
              <button type="button" className="c-button c-button--close" onClick={() => onClose()}>
                &times;
              </button>
              <h2 className="c-heading">
                {`${homeTeam.name} v ${awayTeam.name}`}
              </h2>
              <div className="u-text--quiet u-large u-centered u-letter-box-small">
                {linkedEventTypeName}
                <div className="u-small">
                  Start time: {moment(startTime).format('HH:mm')}
                </div>
              </div>
            </header>

            <div className="c-card__body" style={{ top: '7.5em' }}>
              <div className="c-card__item c-card__item--info o-grid o-grid--center u-centered u-large">
                <div className="o-grid__cell o-grid__cell--width-35">
                  {homeTeam.name}
                </div>
                <div className="o-grid__cell o-grid__cell--width-15 u-super">
                  {scores['home']}
                </div>
                <div className="o-grid__cell o-grid__cell--width-15 u-super">
                  {scores['away']}
                </div>
                <div className="o-grid__cell o-grid__cell--width-35">
                  {awayTeam.name}
                </div>
              </div>

              <div className="c-card__item">
                {<Markets {...selectedEvent} />}
              </div>
            </div>

            <footer className="c-card__footer c-card__footer--block">
              <div className="c-input-group">
                <button type="button" className="c-button c-button--block c-button--brand" onClick={() => onClose()}>Close</button>
                <button type="button" className="c-button c-button--block" onClick={() => this.togglePrices()}>Toggle Prices</button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedEvent }) => ({
  selectedEvent
});

export default connect(mapStateToProps)(EventDetails);