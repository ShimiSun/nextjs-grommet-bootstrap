import React from "react";

import {
  Box,
  Button,
  CheckBox,FormField,
} from "grommet";
import {isEmail,isMobilePhone,matches} from 'validator';
import BirthdateInput from 'components/atoms/BirthdateInput'
import MoneyInput from 'components/atoms/MoneyInput'
import SearchBox from 'components/molecules/SearchBox'
import SchoolBox from 'components/molecules/SchoolBox'
import SignupForm from 'components/organisms/SignupForm'
import AddressForm from 'components/organisms/AddressForm'
import FormContainer from 'components/containers/FormContainer'
import isValidZip from 'is-valid-zip';
import config from 'config'
import moment from 'moment'
import StateSearchBox from 'components/molecules/StateSearchBox'

const {schema,getAddress,expandState,statessArray,}=config






/*
const UniSearchBox=(props)=>{

  const [options,setOptions]=React.useState(statessArray())

  return <Select
  {...props}
  dropHeight='medium'
  options={options}
  onSearch={(searchText) => {
            const regexp = new RegExp(searchText, 'i');
           setOptions(statessArray().filter(o => o.match(regexp)))
          }}
          focusIndicator={false}
          searchPlaceholder='Search for state by name'

/>
} 


*/

export default ()=>{
    const [credentials,openCredentials]=React.useState(false)
    const [address,openAddress]=React.useState(false)
  const [form,openForm]=React.useState(false)
  const [checked, setChecked] = React.useState('student');
  const [email, setEmail]=React.useState('')
  const [phone,setPhone]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [street, setStreet]=React.useState('')
  const [zip,setZip]=React.useState('')
  const [state, setState]=React.useState('')
  const [city, setCity]=React.useState('')
  const [zipError,setZipError]=React.useState('')
  const [streetError,setStreetError]=React.useState('')
  const [student, openStudent] = React.useState(false);
  const [guardian, openGuardian] = React.useState(false);
  const [financialeducator, openFinancialeducator] = React.useState(false);
  const [goal,setGoal]=React.useState(1000)
  const [birthdate,setBirthdate]=React.useState(moment().subtract(13, 'years').format('MM/DD/YYYY'))
  const [prospectiveStates,setProspectiveStates]=React.useState([]) 
  const [stateOfStudy,setStateOfStudy]=React.useState('') 
  const [showStates,setShowStates]=React.useState(true)
  const [showState,setShowState]=React.useState(true)  
  const [school,setSchool]=React.useState(true)  
  const [course,setCourse]=React.useState(true) 

  React.useEffect(
    ()=>{
      const abortController= new AbortController()
      setShowStates(!stateOfStudy)
      return  function cleanup(){
       abortController.abort()
      }
    },[stateOfStudy]
  )

  React.useEffect(
    ()=>{
      const abortController= new AbortController()
      setShowState(prospectiveStates.length===0)
      return  function cleanup(){
       abortController.abort()
      }
    },[prospectiveStates]
  )

  const validateEmail = (value)=>{
    if(!isEmail(value)){
        return 'invalid e-mail'
    }
    return null
}

const validatePhone = (value)=>{
  if(!isMobilePhone(value)){
      return 'invalid phone'
  }
  return null
}


const validatePassword = (value)=>{
    if(!schema.validate(value)){
        return 'invalid password'
    }
    return null
}

const validateStreet = (value)=>{
  if(!matches(value,/^\s*\S+(?:\s+\S+){2}/i)){
    setStreet('')
      setStreetError('invalid street address')
  }else{
    setStreet(value)
    setStreetError('')
  }
  
}


const validateZip = async (value)=>{
  const zipstr=value.replace(/\s/g, '');

  try{
    if(isValidZip(zipstr)){
     const loc= await getAddress(zipstr)
   
     setCity(loc.city);
     setZip(value)
     setState(expandState(loc.state))
    }
  }catch({message}){
if(message.includes('400')){
  setZipError('invalid zipcode format')
}
if (message.includes('401')){
  setZipError('a technical error occured - sorry we are on it')
}

if (message.includes('404')){
  setZipError('zipcode does not exist - double check it')
}

if (message.includes('429')){
  setZipError('usage limit exceeded - please retry after a hour')
}

  }

  
  return null
}
 
const onSubmitCredentials = value=>{
   console.log('connect data: ',value)
  openCredentials(false)
  openAddress(true)
}

const onSubmitAddress= ()=>{
  
 // if (state){
    openAddress(false)

 openForm(true)
 // }
}

const onSubmitForm= ()=>{
  
  switch(checked){
    case 'student':
      openStudent(true)
      openGuardian(false)
      openFinancialeducator(false)
      break;
    case 'guardian':
      openGuardian(true)
      openStudent(false)
      openFinancialeducator(false)
      break;
    case 'financial educator':
      openFinancialeducator(true)
      openStudent(false)
      openGuardian(false)
      break;
      default:
  }

 openForm(false)
}

const onBackToCredentials= ()=>{
  openCredentials(true)
  openAddress(false)
}



const onBackToAddress= ()=>{
  openAddress(true)
  openForm(false)
}

const onCreateUser=()=>{
  console.log('creat now: ',stateOfStudy)
}

const onBackToForm=()=>{
  openForm(true)
  openStudent(false)
  openGuardian(false)
  openFinancialeducator(false)
}


      return (
        <React.Fragment>
          <Box>
           
            <Button  onClick={()=>openCredentials(true)}
              label="CONNECT NOW" primary margin='medium' type='button'  alignSelf='center' />
          </Box>
          {credentials && (
            <SignupForm
            {...{
              openCredentials,
  onSubmitCredentials,
  email,validateEmail,setEmail,
  validatePassword,password,setPassword,
  validatePhone,phone,setPhone
  }}
             />
             
          )}
          {address && (
           <AddressForm
             {...{
              openAddress,
  onSubmitAddress,
  onBackToCredentials,
street,streetError,validateStreet,
  zip,zipError,validateZip,
state,city
             }}
           />
             
          )}
          {form&& (
           <FormContainer
              step={3}
              heading="Your connecting as a:"
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
               
          )}
          {student&& (
           <FormContainer
              step={4}
              heading="Define your campaign precisely:"
              open={openStudent}
              forward={onCreateUser}
              back={onBackToForm}
              >
              { showStates&&
                <FormField
      label="Probable study state(s) (if not yet in college)"
      name="prospectiveStates"
      >
        <StateSearchBox
      selectedStates={prospectiveStates}
      setselectedStates={value=>setProspectiveStates(value)}
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
      >
        <SchoolBox
        stateOfStudy={stateOfStudy}
       value={school}
      onChange={({target:{value}})=>setSchool(value)}
      />
      </FormField>
    
           }

           {!!school&&<FormField
      label="Your course"
      name="course"
      value={course}
      onChange={({target:{value}})=>setCourse(value)}
      required={school}
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
            component={BirthdateInput}
           label="Your birthdate" 
           name="birthdate" 
           type="text" 
           required 
            value={birthdate}
         // error={streetError}
         onChange={event => setBirthdate(event.target.value)}
           />

     
              </FormContainer>
               
          )}
          {guardian&& (
           <FormContainer
              step={4}
              heading="Define your child's campaign precisely:"
              open={openGuardian}
              forward={onCreateUser}
              back={onBackToForm}
              >
               <FormField
      label="Probable study state(s) (for your child)"
      name="prospective states"
      >
        <StateSearchBox
      selectedStates={prospectiveStates}
      setselectedStates={value=>setProspectiveStates(value)}
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
            component={BirthdateInput}
           label="Your child's birthdate" 
           name="birthdate" 
           type="text" 
           required 
            value={birthdate}
         // error={streetError}
         onChange={event => setBirthdate(event.target.value)}
           />
              </FormContainer>
               
          )}
          {financialeducator&& (
           <FormContainer
              step={4}
              heading="Your profile information:"
              open={openFinancialeducator}
              forward={onCreateUser}
              back={onBackToForm}
              >
              
 <Box>financial educator profile</Box>
              </FormContainer>
               
          )}
        </React.Fragment>
      );
    
  }
  
