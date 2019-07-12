import React from "react";

import {FormField,
} from "grommet";
import FormContainer from 'components/containers/FormContainer'
import StateSearchBox from 'components/molecules/StateSearchBox'
import SearchBox from 'components/molecules/SearchBox'
import SchoolBox from 'components/molecules/SchoolBox'
import MoneyInput from 'components/atoms/MoneyInput'
import DateInput from 'components/atoms/DateInput'

export default ({
  openStudent,
  onCreateUser,
  onBackToForm,
  showStates,
  prospectiveStatesError,
  prospectiveStates,setProspectiveStatesError,setProspectiveStates,
  showState,
  stateOfStudy,statessArray,setStateOfStudy,
  schoolError,setSchoolError,
  school,setSchool,
  course,setCourse,
  goal,setGoal,
  birthdate,setBirthdate
  }) => <FormContainer
  step={5}
  heading="Your campaign definition"
  open={openStudent}
  forward={onCreateUser}
  back={onBackToForm}
  >
  { showStates&&
    <FormField
label="Probable study state(s) (if not yet in college)"
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
}

{ showState&&
    <FormField
label="Your college's state (if already in college)"
name="stateOfStudy"
component={SearchBox}
options={statessArray()}
value={stateOfStudy}
onChange={({target:{value}})=>setStateOfStudy(value)}
/>
}

{!!stateOfStudy&&<FormField
label="Your college"
name="school"
error={schoolError}
>
<SchoolBox
stateOfStudy={stateOfStudy}
value={school}
onChange={({target:{value}})=>{
setSchoolError('')
setSchool(value)
}}
/>
</FormField>

}

{!!school&&<FormField
label="Your course"
name="course"
type='text'
value={course}
onChange={({target:{value}})=>setCourse(value)}
required={!!school}
/>


}
  
  <FormField 
//  help='Enter a valid e-mail address'
component={MoneyInput}
label="Your campaign goal" 
name="goal" 

required 
value={goal}

onChange={({ target: { value } }) => setGoal(value )}
/>

<FormField 
//  help='Enter a valid e-mail address'
component={DateInput}
label="Your birthdate" 
name="birthdate" 
type="text" 
required 
value={birthdate}
min={13}
max={50}
onChange={event => setBirthdate(event.target.value)}
/>

</FormContainer>