import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export class NavItem extends React.Component {
  render() {
    let classes = "NavItem";
    if (this.props.active) {
      classes += " --active";
    }
    if (this.props.tech) {
      classes += " --tech";
    }

    return (
      <a href={ this.props.URL } className={ classes }>
        { this.props.text }
      </a>
    );
  }
}

NavItem.PropTypes = {
  URL: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  tech: PropTypes.bool,
}