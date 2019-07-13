import React from "react";
import { ReCaptcha } from 'react-recaptcha-google';

import { Box, Paragraph} from "grommet";




export default ({checkIsHuman})=> {
  const ref = React.useRef(null);

  const onLoadRecaptcha = () => { // when widget loads
    if (ref.current) {
      ref.current.reset();
    }
  };

    return (
     
      <Box>
      <Paragraph>
      As takesavillage, your safety is our core priority.

Proving that you are human and not a computer programme is mainly to prevent automated software (Robots/bots) 
and spammers from performing actions on your behalf. 
For that reason we are requesting you to verify you are human before you can connect with the rest of the community
      </Paragraph>
      <ReCaptcha data-theme='light'
                      ref={ref} 
                       size="normal"
                       render="explicit"
                       sitekey={process.env.RECAPTURE_SITE_KEY}
                       onloadCallback={onLoadRecaptcha}
                       verifyCallback={checkIsHuman} // called when user verification succeeds
                       data-badge='inline'
                       expiredCallback={()=>checkIsHuman(false)}
                     />
      </Box>
     
    );
  
}
