// in src/StreetInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const StreetInput= dynamic(() => import('.'));


storiesOf('StreetInput', module)
    .add('basic', () => <StreetInput/>)
  