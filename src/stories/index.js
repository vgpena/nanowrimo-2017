import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Content from '../components/Content';

storiesOf('Content', module)
  .add('with text', () => (
    <Content className="foo" content="foo" />
  ))
  .add('with some emoji', () => (
    <Content className="bar"  content="bar" />
  ));   