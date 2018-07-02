import React, { Component } from 'react';

class Alert extends Component {
  render() {
    const { type = 'error' } = this.props;
    
    return (
      <div role="alert" className={`c-alert c-alert--${type}`}> 
        {this.props.message}
      </div>
    );
  }
}

export default Alert;
