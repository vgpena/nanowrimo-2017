import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

export class Content extends React.Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.content}</div>
    )
  }
};

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}