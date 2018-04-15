import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class PageTitle extends React.Component {
  render() {
    return (
      <h2 className="PageTitle">
        { this.props.text }
      </h2>
    );
  }
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};