// in src/RecaptureBox.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const RecaptureBox= dynamic(() => import('.'));



storiesOf('RecaptureBox', module)
    .add('basic', () => <RecaptureBox />)
  