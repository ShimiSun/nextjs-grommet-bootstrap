

import React from 'react';
import { Box, Button,ResponsiveContext,} from 'grommet';
import { Twitter,Facebook,Linkedin,} from 'grommet-icons';
import config from 'config'

export default ()=>{

    const size = React.useContext(ResponsiveContext)

    return (
        <Box
        margin={{ horizontal: `large` }}
        direction="row"
        align="center"
        gap="medium"
      >
      <Box responsive ={false} direction='row' align="center" justify="center">
    <Button label="" hoverIndicator
         rel="noopener noreferrer"
          target="_blank"
          a11title="Linkedin"
          icon={<Linkedin color={size==='small'&&'brand'} />}
          href={`https://linkedin.com/${config.linkedin}/`}
        />
        <Button
        label="" hoverIndicator
          rel="noopener noreferrer"
          target="_blank"
          a11title="Twitter"
          icon={<Twitter color={size==='small'&&'brand'} />}
          href={`https://twitter.com/${config.twitter}`}
        />
        <Button
        label="" hoverIndicator
          rel="noopener noreferrer"
          target="_blank"
          a11title="Facebook"
          icon={<Facebook color={size==='small'&&'brand'} />}
          href={`https://facebook.com/${config.facebook}`}
        />
       
      </Box>
      
      </Box>
    );
};
