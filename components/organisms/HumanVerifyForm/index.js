import React from "react";

import {Box,Heading,Paragraph
} from "grommet";
import FormContainer from 'components/containers/FormContainer'
import RecaptureBox from "components/molecules/RecaptureBox";

export default ({
  isHuman,
  openHuman,
  onSubmitHuman,
  onBackToProfile,
  student,guardian,checkIsHuman,

  }) =>  <FormContainer
  disabled={!isHuman}
step={6}
heading={"Verify you're human"}
open={openHuman}
forward={onSubmitHuman}
back={onBackToProfile}
>
<Box alignContent='center' alignSelf='center'>
{(student||guardian)&&
<Box gap='xsmall'>
<Heading level='6' margin="none">Note:</Heading>
<Paragraph margin ={{top:"none",bottom:"xsmall"}}>
{"Takesavillage's"} fee is <strong>4%</strong> from 
each donation you receive before connecting to a Financial Educator and only 
<strong> 2% </strong> after you connect.</Paragraph>
<Paragraph>
The fee for our processing company, Stripe, is <strong>2.9% + $0.30</strong> per donation
</Paragraph>
</Box>
}
<RecaptureBox
  {...{checkIsHuman}}
/>
</Box>
</FormContainer>