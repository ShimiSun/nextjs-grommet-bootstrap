// in src/MoneyInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const MoneyInput= dynamic(() => import('.'));


storiesOf('MoneyInput', module)
    .add('basic', () => <MoneyInput/>)
  