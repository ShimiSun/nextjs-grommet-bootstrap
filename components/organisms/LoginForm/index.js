import React from "react";

import {
  Box,
  Button,
  TextInput,
  FormField,
  Form
} from "grommet";

import PasswordValidator from 'password-validator';
import {isEmail} from 'validator';

const schema = new PasswordValidator().is()
.min(8) // Minimum length 8
.is()
.max(100) // Maximum length 100
.has()
.uppercase() // Must have uppercase letters
.has()
.lowercase() // Must have lowercase letters
.has()
.digits(); // Must have digits


export default ({onClose,onLogin}) => {

    const [email, setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')

const validateEmail = (value)=>{
    if(!isEmail(value)){
        return 'invalid e-mail'
    }
    return null
}

const validatePassword = (value)=>{
    if(!schema.validate(value)){
        return 'invalid password'
    }
    return null
}

    return (
  
        <Box width="medium">
        <Form  onSubmit={({ value }) => onLogin(value)}>
          <Box background='brand-mobi' fill flex elevation='medium' justify='center'>
           <Box pad='xlarge'>
           
           <FormField 
         //  help='Enter a valid e-mail address'
            component={TextInput}
           label="E-mail" name="email" type="email" required 
           value={email}
           validate={validateEmail}
              onChange={event => setEmail(event.target.value)}
           />
            <FormField
          //  help='Atleast 8 characters (a digit, lowercase and uppercase letter)'
              label="Password"
              name="password"
              type='password'
              required
              validate={validatePassword}
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
           
           </Box>
      
           </Box>
           
            <Box  direction="row" justify="between" margin='medium' >
              <Button primary type="submit" label="LOG IN"  />
              <Button label="CANCEL" onClick={onClose}/>
            </Box>
            </Form>
        </Box>
     
  );
}

