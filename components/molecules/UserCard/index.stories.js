// in src/UserCard.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const UserCard = dynamic(() => import('.'));


storiesOf('UserCard', module)
    .add('basic', () => <UserCard id={1}/>)
  