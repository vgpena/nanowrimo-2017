import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class DayIndicator extends React.Component {
  render() {
    return (
      <h4 className="DayIndicator">
        <span class="DayIndicator-inner">Day { this.props.day }</span>
      </h4>
    );
  }
}

DayIndicator.propTypes = {
  day: PropTypes.number.isRequired,
};