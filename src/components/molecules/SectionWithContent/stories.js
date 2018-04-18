import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SectionWithContent } from './';

const stories = storiesOf('molecules/SectionWithContent', {});

const markdown = "Let me **not** to the *marriage* of true minds admit impediments."

stories.add('default', () => {
  return <SectionWithContent title="Section Title" content={ markdown } />;
});