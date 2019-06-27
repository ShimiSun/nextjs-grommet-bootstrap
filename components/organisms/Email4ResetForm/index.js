import React from "react";

import {
  Box,
  Button,
  TextInput,
  FormField,
  Form,
  Text,
  Anchor
} from "grommet";
import Link from 'next/link';
import {isEmail} from 'validator';





export default ({onClose,}) => {

    const [email, setEmail]=React.useState('')

const validateEmail = (value)=>{
    if(!isEmail(value)){
        return 'invalid e-mail'
    }
    return null
}


const onSendMail=(value)=>{
  console.log('e-mailing: ',value.email)
}



    return (
  
        <Box>
        <Form  onSubmit={({ value }) => onSendMail(value)}>
          <Box background='brand-mobi'  flex elevation='medium' justify='center'>
           <Box pad={{horizontal:'large',vertical:'medium'}} gap='xxsmall'>
           
           <Text size='small' textAlign='end'> To reset your password, enter your</Text>

           <FormField 
         //  help='Enter a valid e-mail address'
            component={TextInput}
           label="E-mail" name="email" type="email" required 
           value={email}
           validate={validateEmail}
              onChange={event => setEmail(event.target.value)}
           />
                
           </Box>
      
           </Box>
           <Text size='xsmall'>By using our site, you agree to our <Link href='/terms'>
           <Anchor primary label="terms" /></Link> and <Link href='privacy'><Anchor primary label="privacy policy" /></Link>.</Text>
            <Box  direction="row" justify="between" margin='medium' >
              <Button primary type="submit" label="SEND E-MAIL" href={`https://${email}`} />
              <Button label="CANCEL" onClick={onClose}/>
            </Box>
            </Form>
        </Box>
     
  );
}

