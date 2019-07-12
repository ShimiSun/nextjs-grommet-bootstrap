// in src/CategoryForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const CategoryForm = dynamic(() => import('.'));


storiesOf('CategoryForm', module)
    .add('basic', () => <CategoryForm/>)
  