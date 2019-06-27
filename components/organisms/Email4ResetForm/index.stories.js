// in src/Email4ResetForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const Email4ResetForm = dynamic(() => import('.'));


storiesOf('Email4ResetForm', module)
    .add('basic', () => <Email4ResetForm/>)
  