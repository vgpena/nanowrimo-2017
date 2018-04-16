import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class SectionTitle extends React.Component {
  render() {
    return (
      <h3 className="SectionTitle" href={`#${ this.props.text }`}>
        { this.props.text }
      </h3>
    );
  }
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};