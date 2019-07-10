import React from "react";

import {FormField,TextInput,// Select
} from "grommet";

import PasswordInput from 'components/atoms/PasswordInput'

import PhoneInput from 'components/atoms/PhoneInput'
import FormContainer from 'components/containers/FormContainer'




export default ({
  openCredentials,
  onSubmitCredentials,
  email,validateEmail,setEmail,
  validatePassword,password,setPassword,
  validatePhone,phone,setPhone
  }) => <FormContainer
step={1}
heading={"We'll need your credentials"}
open={openCredentials}
forward={onSubmitCredentials}

>
<FormField 
//  help='Enter a valid e-mail address'
component={TextInput}
label="E-mail" 
name="email" 
type="email" 
required 
value={email}
validate={validateEmail}
onChange={event => setEmail(event.target.value)}
/>

<FormField
//  help='Atleast 8 characters (a digit, lowercase and uppercase letter)'
component={PasswordInput}
label="Password"
name="password"
required
validate={validatePassword}
value={password}
onChange={(e)=> setPassword(e.target.value)}
/>

<FormField
//  help='Atleast 8 characters (a digit, lowercase and uppercase letter)'
component={PhoneInput}
label="Phone"
name="phone"
required
validate={validatePhone}
value={phone}
onChange={(e)=> setPhone(e.target.value)}
/>
</FormContainer>