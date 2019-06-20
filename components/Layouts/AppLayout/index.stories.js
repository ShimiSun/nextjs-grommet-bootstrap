// in src/AppLayout.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('.'));

storiesOf('AppLayout', module)
    .add('basic', () => <AppLayout>Page body</AppLayout>)
  