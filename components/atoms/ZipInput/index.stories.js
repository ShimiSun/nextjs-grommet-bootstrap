// in src/ZipInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const ZipInput= dynamic(() => import('.'));


storiesOf('ZipInput', module)
    .add('basic', () => <ZipInput/>)
  