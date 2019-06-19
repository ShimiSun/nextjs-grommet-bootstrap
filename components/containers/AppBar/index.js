import React from 'react'
import { Box, } from 'grommet';

export default  (props) => (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'xsmall', right: 'xsmall', vertical: 'xsmall' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
      />
    );
