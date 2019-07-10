// in src/FormContainer.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const FormContainer= dynamic(() => import('.'));


storiesOf('FormContainer', module)
    .add('basic', () => <FormContainer/>)
  