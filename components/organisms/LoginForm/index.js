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
import PasswordValidator from 'password-validator';
import {isEmail} from 'validator';
import { View,FormLock } from "grommet-icons";

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

  const [hide,setHide]=React.useState(true)
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

const toggleHide=()=>setHide(!hide)

    return (
  
        <Box>
        <Form  onSubmit={({ value }) => onLogin(value)}>
          <Box background='brand-mobi'  flex elevation='medium' justify='center'>
           <Box pad={{horizontal:'large',vertical:'medium'}} gap='xxsmall'>
           
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
          // component={TextInput}
              label="Password"
              name="password"
             validate={validatePassword}
              value={password}
              >
           <Box direction="row" align="center">
      <TextInput plain type={!hide ? "text" : "password"} value={password}
              onChange={(e)=> setPassword(e.target.value)}/>
      <Button
        icon={!hide ? <View /> : <FormLock />}
        onClick={toggleHide}
      />
    </Box>
          </FormField>
 <Text size='xsmall' textAlign='end'> <Link href='/#'><Anchor primary label="forgot password?" /></Link></Text>

           
           </Box>
      
           </Box>
           <Text size='xsmall'>By using our site, you agree to our <Link href='/terms'>
           <Anchor primary label="terms" /></Link> and <Link href='privacy'><Anchor primary label="privacy policy" /></Link>.</Text>
            <Box  direction="row" justify="between" margin='medium' >
              <Button primary type="submit" label="LOG IN"  />
              <Button label="CANCEL" onClick={onClose}/>
            </Box>
            </Form>
        </Box>
     
  );
}

