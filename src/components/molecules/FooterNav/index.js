import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

import { FooterTitle } from '../../atoms/FooterTitle';
import { Nav } from '../Nav';

export class FooterNav extends React.Component {
  render() {
    return (
      <div className="FooterNav">
        <FooterTitle />
        <Nav { ...this.props }/>
        <Nav navItems={[ { URL: "#", text: "back to top" } ]} />
      </div>
    );
  }
}

FooterNav.propTypes = {
  navItems: Nav.PropTypes,
};