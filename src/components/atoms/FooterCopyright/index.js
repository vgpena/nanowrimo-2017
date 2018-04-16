import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class FooterCopyright extends React.Component {
  render() {
    return (
      <small className="FooterCopyright">
        &copy; 2018 Violet Pe&ntilde;a  
      </small>
    );
  }
}