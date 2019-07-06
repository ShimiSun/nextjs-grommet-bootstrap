// in src/ConnectNow.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const ConnectNow = dynamic(() => import('.'));

storiesOf('ConnectNow', module)
    .add('basic', () => <ConnectNow>Page body</ConnectNow>)
  