// in src/VerifyForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const VerifyForm = dynamic(() => import('.'));


storiesOf('VerifyForm', module)
    .add('basic', () => <VerifyForm/>)
  