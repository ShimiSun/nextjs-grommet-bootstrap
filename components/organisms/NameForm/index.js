import React from "react";

import {FormField,TextInput,// Select
} from "grommet";
import FormContainer from 'components/containers/FormContainer'




export default ({
  openName,
  onSubmitName,
  firstname,setFirstname,
  lastname,setLastname,
  // validateName
  }) => <FormContainer
step={1}
heading={"We'll need your name"}
open={openName}
forward={onSubmitName}

>
<FormField 
//  help='Enter a valid e-mail address'
component={TextInput}
label="First Name" 
name="firstname" 
type="text" 
required 
value={firstname}
onChange={event => setFirstname(event.target.value)}
// validate={validateName}
/>
<FormField 
//  help='Enter a valid e-mail address'
component={TextInput}
label="Last Name" 
name="lastname" 
type="text" 
required 
value={lastname}
onChange={event => setLastname(event.target.value)}
// validate={validateName}
/>

</FormContainer>