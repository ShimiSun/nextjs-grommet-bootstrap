// components/atoms/Button/index.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  Button from ".";

storiesOf('atoms/Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('outlined primary', () => (
    <Button variant="outlined" color="primary" onClick={action('clicked')}>
      Outline Primary
    </Button>
  ))
  .add('contained secondary', () => (
    <Button variant="contained" color="secondary" onClick={action('clicked')}>
      Contained Secondary
    </Button>
  ))
  .add('circle button', () => (
    <Button  color="primary" aria-label="Add" onClick={action('clicked')}>
      CB
    </Button>
  ))
  .add('disabled button', () => (
    <Button variant="contained" color="primary" onClick={action('clicked')} disabled>
      Disabled Button
    </Button>
  ));