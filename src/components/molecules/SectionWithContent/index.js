import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

import { SectionTitle } from '../../atoms/SectionTitle';
import { Content } from '../../atoms/Content';

export class SectionWithContent extends React.Component {
  render() {
    return (
      <section>
        <SectionTitle text={ this.props.title } />
        <Content text={ this.props.content } />
      </section>
    );
  }
}

SectionWithContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};