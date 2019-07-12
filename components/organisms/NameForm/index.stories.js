// in src/NameForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const NameForm = dynamic(() => import('.'));


storiesOf('NameForm', module)
    .add('basic', () => <NameForm/>)
  