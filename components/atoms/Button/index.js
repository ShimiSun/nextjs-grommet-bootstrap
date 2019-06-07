// components/atoms/Button/index.js
import React from 'react';

import { Button as MaterialButton } from '@material-ui/core';

export default ({ children, ...defaultProps } ) =>(
    <MaterialButton {...defaultProps}>
      {children}
    </MaterialButton>
  );
