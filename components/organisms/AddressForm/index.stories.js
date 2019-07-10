// in src/AddressForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const AddressForm = dynamic(() => import('.'));


storiesOf('AddressForm', module)
    .add('basic', () => <AddressForm/>)
  