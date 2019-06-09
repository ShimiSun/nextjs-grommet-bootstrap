// in src/App.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import AppOld from '.';

storiesOf('AppOld', module).add('basic', () => <AppOld />);