import React from "react";

import {FormField,
} from "grommet";
import FormContainer from 'components/containers/FormContainer'
import StateSearchBox from 'components/molecules/StateSearchBox'
import MoneyInput from 'components/atoms/MoneyInput'
import DateInput from 'components/atoms/DateInput'

export default ({
  openGuardian,
  onCreateUser,
  onBackToForm,
  prospectiveStatesError,
  prospectiveStates,setProspectiveStatesError,setProspectiveStates,
  
  goal,setGoal,
  birthdate,setBirthdate
  }) =>  <FormContainer
  step={5}
  heading="Your child's campaign definition"
  open={openGuardian}
  forward={onCreateUser}
  back={onBackToForm}
  >
   <FormField
label="Probable study state(s) (for your child)"
name="prospectiveStates"
error={prospectiveStatesError}
>
<StateSearchBox
selectedStates={prospectiveStates}
setselectedStates={value=>{
setProspectiveStatesError('')
setProspectiveStates(value)
}}
/>
</FormField>
  <FormField 
//  help='Enter a valid e-mail address'
component={MoneyInput}
label="Your campaign goal" 
name="goal" 
type="text" 
required 
value={goal}
// error={streetError}
onChange={event => setGoal(event.target.value)}
/>



<FormField 
//  help='Enter a valid e-mail address'
component={DateInput}
label="Your child's birthdate" 
name="birthdate" 
type="text" 
required 
value={birthdate}
Min={1}
max={13}
onChange={event => setBirthdate(event.target.value)}
/>
  </FormContainer>