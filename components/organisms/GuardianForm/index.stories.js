// in src/GuardianForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const GuardianForm = dynamic(() => import('.'));


storiesOf('GuardianForm', module)
    .add('basic', () => <GuardianForm/>)
  