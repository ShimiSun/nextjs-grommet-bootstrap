import React from "react";

import {FormField,
} from "grommet";
import FormContainer from 'components/containers/FormContainer'
import StateSearchBox from 'components/molecules/StateSearchBox'
import CRDInput from 'components/atoms/CRDInput'

export default ({
  openFinancialeducator,
  onCreateUser,
  onBackToForm,
  prospectiveStatesError,
  prospectiveStates,setProspectiveStatesError,setProspectiveStates,
  code,setCode,

  }) =>  <FormContainer
  step={5}
  heading="Your license information"
  open={openFinancialeducator}
  forward={onCreateUser}
  back={onBackToForm}
  >
<FormField
label="Your state(s) of operation"
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
component={CRDInput}
label="Your CRD Number" 
name="crdb" 
type="text" 
required 
value={code}
onChange={event => setCode(event.target.value)}
/>
  </FormContainer>