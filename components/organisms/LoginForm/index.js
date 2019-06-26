import React from "react";

import {
  Box,
  Button,
  TextInput,
  FormField,
  Form
} from "grommet";


export default ({onClose,onLogin}) => {

    const [email, setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')



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
              onChange={event => setEmail(event.target.value)}
           />
            <FormField
          //  help='Atleast 8 characters (a digit, lowercase and uppercase letter)'
              label="Password"
              name="password"
              type='password'
              required
              validate={{ regexp: /^[a-z]/i }}
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

