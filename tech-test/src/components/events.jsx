import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../selectors/events';
import actions from '../actions';

import Event from './event';
import EventDetails from './event-details';
import Markets from './primary-markets';

class Events extends Component {
  state = {
    eventOpen: false
  };

  openEvent(event) {
    this.setState({ eventOpen: true });
    this.props.dispatch(actions.openEvent(event));
  }

  closeEvent() {
    this.setState({ eventOpen: false });
    this.props.dispatch(actions.closeEvent());
  }

  render() {
    const { events = [], selectedEvent } = this.props;
    const { eventOpen } = this.state;

    return (
      <div>
        {
          events.map((event, i) => {
            return (
              <button role="menuitem" key={i} className="c-card__control u-high" onClick={() => this.openEvent(event)}>
                <Event {...event} />
                <Markets {...event} />
              </button>
            );
          })
        }
        {
          eventOpen &&
          <EventDetails {...selectedEvent} onClose={() => this.closeEvent()} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: getEvents(state),
  selectedEvent: state.selectedEvent
});

export default connect(mapStateToProps)(Events);
