// in src/Score.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const Score= dynamic(() => import('.'));


storiesOf('Score', module)
    .add('basic', () => <Score amount={3000} goal={14000}/>)
  