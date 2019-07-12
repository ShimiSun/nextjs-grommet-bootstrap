import React from "react";

import {CheckBox,// Select
} from "grommet";
import FormContainer from 'components/containers/FormContainer'




export default ({
  openForm,
  onSubmitForm,
  onBackToAddress,
  checked,setChecked
  }) =>  <FormContainer
  step={4}
  heading="Who you are connecting as"
  open={openForm}
  forward={onSubmitForm}
  back={onBackToAddress}
  >
  
<CheckBox
checked={checked==='student'}
label="Student"
onChange={() => setChecked('student')}
/>
<CheckBox
checked={checked==='guardian'}
label="Guardian"
onChange={() => setChecked('guardian')}
/>
<CheckBox
checked={checked==='financial educator'}
label="Financial Educator"
onChange={() => setChecked('financial educator')}
/>
  </FormContainer>