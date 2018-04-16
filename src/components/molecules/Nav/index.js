import * as React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import './styles.sass';

import { NavItem } from '../../atoms/NavItem';

export class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <ol className="Nav-list">
          {
            this.props.navItems.map((navItem) => {
              return (
                <li className="Nav-list-item">
                  <NavItem {...navItem} />
                </li>
              )
            })
          }
        </ol>
      </nav>
    );
  }
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(NavItem.PropTypes),
};