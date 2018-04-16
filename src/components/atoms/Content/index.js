import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './styles.sass';

export class Content extends React.Component {
  render() {
    return (
      <ReactMarkdown className="Content" source={this.props.text} />
    );
  }
}

Content.propTypes = {
  text: PropTypes.string.isRequired,
};