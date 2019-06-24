// in src/AppBar.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const AppBar = dynamic(() => import('.'));


storiesOf('AppBar', module)
    .add('basic', () => <AppBar/>)
  