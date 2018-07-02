import React, { PureComponent } from 'react';
import moment from 'moment';

class Event extends PureComponent {
  render() {
    const { competitors, startTime } = this.props;

    if (!competitors) return null;

    const homeTeam = competitors.find(c => c.position === 'home');
    const awayTeam = competitors.find(c => c.position === 'away');

    return (
      <div className="o-grid" >
        <div className="o-grid__cell o-grid__cell--width-15 u-text--quiet">
          {moment(startTime).format('HH:mm')}
        </div>
        <div className="o-grid__cell">
          <span className="u-text--loud">{homeTeam.name}</span>
          <span className="u-text--quiet u-pillar-box-small">v</span>
          <span className="u-text--loud">{awayTeam.name}</span>
        </div>
      </div>
    );
  }
}

export default Event;
