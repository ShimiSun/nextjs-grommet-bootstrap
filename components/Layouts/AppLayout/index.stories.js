// in src/AppLayout.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import AppLayout from '.';


storiesOf('AppLayout', module)
    .add('basic', () => <AppLayout>Page body</AppLayout>)
  