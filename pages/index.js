import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export default () => (
    <Container minWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-beta Mockup
        </Typography>
        <p>{process.env.GREETING}</p>
       <p>(minimalistic set up for material ui and storybook)</p> 
       
      </Box>
    </Container>
  );

