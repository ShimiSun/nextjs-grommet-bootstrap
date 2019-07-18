// in src/ProfileLayout.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const ProfileLayout = dynamic(() => import('.'));

storiesOf('ProfileLayout', module)
    .add('basic', () => <ProfileLayout>Page body</ProfileLayout>)
  