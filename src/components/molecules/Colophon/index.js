import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

import { FooterCopyright } from '../../atoms/FooterCopyright';
import { Nav } from '../Nav';

export class Colophon extends React.Component {

  render() {
    const techNavItems = this.props.navItems.map((item) => {
      return (
        {
          URL: item.URL,
          text: item.text,
          active: item.active,
          tech: true,
        }
      )
    });

    return (
      <div className="Colophon">
        <FooterCopyright />
        <Nav navItems={ techNavItems } />
      </div>
    );
  }
}

Colophon.propTypes = {
  navItems: Nav.PropTypes,
};