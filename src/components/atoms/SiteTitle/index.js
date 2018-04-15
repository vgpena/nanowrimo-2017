import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class SiteTitle extends React.Component {
  render() {
    return (
      <a className="IndexLink" href="/">
        <h1 className="SiteTitle">
          I have never been here before
        </h1>
      </a>
    );
  }
}