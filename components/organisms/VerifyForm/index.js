import React from "react";

import {Box,Paragraph,
} from "grommet";
import FormContainer from 'components/containers/FormContainer'
// import VerifyCodeInput from "components/atoms/VerifyCodeInput";
import ReactCodeInput from 'react-verification-code-input';

export default ({openVerify,onSubmitVerify,verifyCode,verifyCodeError,setVerifyCode,}) =>
  <FormContainer step={7} heading="Verify your connection" open={openVerify} forward={onSubmitVerify}>
    <Box>
      <Paragraph>
        Congratulations. You have succefully connected with the takesavillage community. 
        We have sent a verification code to your email address and / or phone. 
        You can use it below to verify your connection and get access to your profile.
      </Paragraph>
      <ReactCodeInput
      fields={4}
      value={verifyCode}
      error={verifyCodeError}
      onChange={(value)=>setVerifyCode(value)}
      />

    </Box>
  </FormContainer>