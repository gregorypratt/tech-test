import React, { Component } from 'react';
import { connect } from 'react-redux';

class Price extends Component {
  render() {
    const { decimal, num, den, viewAsDecimal } = this.props;

    const formattedDecimal = decimal ? parseFloat(decimal).toFixed(2) : '-';
    const formattedFraction = den ? `${num}/${den}` : '-';

    return (
      <span>
        {
          viewAsDecimal ? formattedDecimal : formattedFraction
        }
      </span>
    );
  }
}

const mapStateToProps = ({ price: { viewAsDecimal } }) => ({
  viewAsDecimal
});

export default connect(mapStateToProps)(Price);