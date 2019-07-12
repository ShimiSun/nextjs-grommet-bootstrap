import React from "react";

import {
  Box,
  Button,
} from "grommet";
import {isEmail,isMobilePhone,matches} from 'validator';
import SignupForm from 'components/organisms/SignupForm'
import AddressForm from 'components/organisms/AddressForm'
import isValidZip from 'is-valid-zip';
import config from 'config'
import moment from 'moment'
import NameForm from "components/organisms/NameForm";
import CategoryForm from "components/organisms/CategoryForm";
import StudentForm from "components/organisms/StudentForm"
import GuardianForm from "components/organisms/GuardianForm";
import LicenseForm from "components/organisms/LicenseForm";

const {schema,getAddress,expandState,statessArray,}=config



export default ()=>{
  const [name,openName]=React.useState(false)
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
  const [lat,setLat]=React.useState('')
  const [lng, setLng]=React.useState('')
  const [city, setCity]=React.useState('')
  const [zipError,setZipError]=React.useState('')
  const [streetError,setStreetError]=React.useState('')
  const [student, openStudent] = React.useState(false);
  const [guardian, openGuardian] = React.useState(false);
  const [financialeducator, openFinancialeducator] = React.useState(false);
  const [goal,setGoal]=React.useState(1000)
  const [birthdate,setBirthdate]=React.useState(moment().subtract(1, 'years').format('MM/DD/YYYY'))
  const [prospectiveStates,setProspectiveStates]=React.useState([]) 
  const [stateOfStudy,setStateOfStudy]=React.useState('') 
  const [showStates,setShowStates]=React.useState(true)
  const [showState,setShowState]=React.useState(true)  
  const [school,setSchool]=React.useState('')  
  const [course,setCourse]=React.useState('') 
  const [code,setCode]=React.useState('0 0 0 0 0 0 0') 
 const [prospectiveStatesError,setProspectiveStatesError]=React.useState('')
 const [schoolError,setSchoolError]=React.useState('')
 const [firstname, setFirstname]=React.useState('')
 const [lastname,setLastname]=React.useState('')


React.useEffect(
  ()=>{
    const abortController= new AbortController()
    
    if(student&&(moment(birthdate).isAfter(moment().subtract(14, 'years').format('MM/DD/YYYY')))){
      setBirthdate(moment().subtract(13, 'years').format('MM/DD/YYYY'))
    }

    if(guardian&&(moment(birthdate).isBefore(moment().subtract(12, 'years').format('MM/DD/YYYY')))){
      setBirthdate(moment().subtract(1, 'years').format('MM/DD/YYYY'))
    }

    return  function cleanup(){
     abortController.abort()
    }
  },[student,guardian,birthdate]
)

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
// ^[\p{L} \.\-]+$
const validateName = (value)=>{
  if(!matches(value,/^[\p{L} .-]+$/i)){
      return 'invalid name'
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
  setZipError('')
  try{
    if(isValidZip(zipstr)){
     const loc= await getAddress(zipstr)
     setLat(loc.lat);
     setLng(loc.lng);
     setCity(loc.city);
     setZip(value)
     setState(expandState(loc.state))
    }
  }catch({message}){
    setZip('')
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

const onSubmitName = value=>{
  console.log('connect data: ',value)
 openName(false)
 openCredentials(true)
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

const onBackToName= ()=>{
  openName(true)
  openCredentials(false)
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


 let validateProspectiveState=false
 let validateSchool=false
  if (prospectiveStates.length===0){
    // console.log(stateOfStudy)
    validateProspectiveState=!!stateOfStudy&&student
      }else{
        validateProspectiveState=true
      }
  if(validateProspectiveState){
    setProspectiveStatesError('')
    
  }else{
    setProspectiveStatesError('please select atleast one state')
   // console.log('error: in prospective states')
  }

  if (!school&&student){

    validateSchool=!stateOfStudy
      }else{
        validateSchool=true
      }
  if(validateSchool){
    setSchoolError('')
    
  }else{
    setSchoolError('please select a school')
   // console.log('error: in school')
  }
if(validateProspectiveState&&validateSchool){

  const user= {firstname,lastname,email,phone, password}
  const useraddress= {street,city,state,zip,lat,lng}
  const userstory ={goal,stateOfStudy,school,course,prospectiveStates,birthdate}
  const userlicense={code,prospectiveStates}

console.log('user: ',user)
console.log('address: ',useraddress)
if(student || guardian){
  console.log('story',userstory)
}
if(financialeducator){
  console.log('license',userlicense)
}

}
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
           
            <Button  onClick={()=>openName(true)}
              label="CONNECT NOW" primary margin='medium' type='button'  alignSelf='center' />
          </Box>
          {name && (
            <NameForm
            {...{
              openName,
  onSubmitName,
  validateName,
  firstname,setFirstname,
  lastname,setLastname
  }}
             />
             
          )}
          {credentials && (
            <SignupForm
            {...{
              openCredentials,
  onSubmitCredentials,
  onBackToName,
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
          <CategoryForm
          {...{
  openForm,
  onSubmitForm,
  onBackToAddress,
  checked,setChecked
  }}/>
               
          )}
          {student&& (
           <StudentForm
           {...{
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
  }}/>
               
          )}
          {guardian&& (
          <GuardianForm
          {...{openGuardian,
  onCreateUser,
  onBackToForm,
  prospectiveStatesError,
  prospectiveStates,setProspectiveStatesError,setProspectiveStates,
  
  goal,setGoal,
  birthdate,setBirthdate}}
              /> 
          )}
          {financialeducator&& (
           <LicenseForm
           {...{
  openFinancialeducator,
  onCreateUser,
  onBackToForm,
  prospectiveStatesError,
  prospectiveStates,setProspectiveStatesError,setProspectiveStates,
  code,setCode,

  }}
               />
          )}
        </React.Fragment>
      );
    
  }
  
