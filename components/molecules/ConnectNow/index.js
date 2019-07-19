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
import HumanVerifyForm from "components/organisms/HumanVerifyForm";
import VerifyForm from "components/organisms/VerifyForm";
import Router from 'next/router'
import {app} from 'api/feathers'


const {schema,getAddress,expandState,}=config



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
 const [profile,openProfile]= React.useState(false);
 const [human,openHuman]= React.useState(false);
 const [isHuman,checkIsHuman]=React.useState(false)
 const [verify,openVerify]= React.useState(false);
 const [verifyCode,setVerifyCode]=React.useState('')
 const [verifyCodeError,setVerifyCodeError]=React.useState('')
 const [addedId,setAddedId]=React.useState(null)


React.useEffect(
  ()=>{
    const abortController= new AbortController()
    
    if(student&&(moment(birthdate,'MM/DD/YYYY').isAfter(moment().subtract(14, 'years').format('MM/DD/YYYY')))){
      setBirthdate(moment().subtract(13, 'years').format('MM/DD/YYYY'))
    }

    if(guardian&&(moment(birthdate,'MM/DD/YYYY').isBefore(moment().subtract(12, 'years').format('MM/DD/YYYY')))){
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
  
  if (state){
    openAddress(false)

 openForm(true)
  }
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
openProfile(true)
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

  

openHuman(true)
openProfile(false)

}
}

const onBackToForm=()=>{
  openForm(true)
  openStudent(false)
  openGuardian(false)
  openFinancialeducator(false)
}

// process address

const addAddress= async () => {
  const useraddress= {street,city,state,zip,lat,lng}
  try{
 const {id}= await app.service('address').create(useraddress)
 /*
 await setTimeout(() => {
 console.log('address: ',useraddress)
  },1000)
  */
 return id
  }
  catch({message}){
console.log("Err: ",message)
  }
  return null
}

// process user

const addUser = async () => {
  const user= {firstname,lastname,email,phone, password}
  try{
  const {id}= await app.service('users').create(user)
 /*
 await setTimeout(() => {
 console.log('user: ',user)
  },1000)
  */
 return id
  }
  catch({message}){
console.log("Err: ",message)
  }
  return null
}

// process story
const addStory = async () => {
  const userstory ={goal,stateOfStudy,school,course,prospectiveStates,birthdate}
  const xpros =prospectiveStates.map((p)=>p.name)
  userstory.prospectiveStates=xpros
  try{
  const {id}= await app.service('stories').create(userstory)
/*
 await setTimeout(() => {
 console.log('story: ',userstory)
  },1000)
*/
 return id
  }
  catch({message}){
console.log("Err: ",message)
  }
  return null
}
// process license
const addLicense = async () => {
  const userlicense={code,prospectiveStates}
  const xpros =prospectiveStates.map((p)=>p.name)
  userlicense.prospectiveStates=xpros
  try{
 // const {id}= await app.service('licenses').create(userlicense)
 await setTimeout(() => {
 console.log('license: ',userlicense)
  },1000)
 return 1// id
  }
  catch({message}){
console.log("Err: ",message)
  }
  return null
}

const syncAddress2User=(id,userId)=>app.service('address').patch(id,{userId}) 


const syncStory2User=(id,userId)=>app.service('stories').patch(id,{userId})

const syncFE2User=(id,userId)=>app.service('licenses').patch(id,{userId}) 

const connecting =async ()=>{    
    
try{
    
   
    const addedUser=addUser()
    const addedAddress=addAddress()
let userId=null
    await (async () => {
     
    
     userId= await addedUser
    const addressId=await addedAddress
      syncAddress2User(addressId,userId)
      await (async () => {
        const synchedAddress = syncAddress2User(addressId,userId)
          
          await synchedAddress
        if(student || guardian){ 
          const addedStory = addStory()
          const storyId=  await addedStory
          const synchedStory= syncStory2User(storyId,userId)
          await synchedStory
        //  console.log('guardian',guardian,'student',student,'story: ',storyId,' userId: ',userId,' addressId: ',addressId)
        }
        if(financialeducator){
          const addedLicense =addLicense()
          const licenseId=  await addedLicense
          const synchedFE= syncFE2User(licenseId,userId)
            await synchedFE
         //   console.log('fe',financialeducator,'story: ',storyId,' userId: ',userId,' addressId: ',addressId)
        }   
      })()
      })()

return userId
 
}
catch({message}){
  console.log('error:',message)
}

return null
    
}


const onSubmitHuman=async()=>{
  
const userId = await connecting()
setAddedId(userId)
openVerify(true)
openHuman(false)
}

const onBackToProfile=()=>{
  openHuman(false)
  openProfile(true)
  checkIsHuman(false)
}

const verifing =async ()=>{
 
try{
  await setTimeout(() => {
       
    console.log('verify user by code: ',verifyCode)
    }, 1000);
 
}
catch({message}){
  console.log('error:',message)
}
    
}

const onSubmitVerify=async()=>{
  try{
    await verifing()
    openVerify(false)
let url  = ''
// let as=''
if(student){

  url=`/campaigns?category=students&id=${addedId}`
  // as=`/campaigns/students/${3}`
}
if(guardian){
  url=`/campaigns?category=guardians&id=${addedId}`
 // as=`/campaigns/guardians/${3}`
}

if(financialeducator){
  url=`/brokers?id=${addedId}`
 // as=`/brokers/${3}`
}
    Router.push(url,)

  }catch({message}){
    setVerifyCodeError(message)
  }

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
          {profile&&
          <React.Fragment>
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
  stateOfStudy,setStateOfStudy,
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
         }
         {
           human&&<HumanVerifyForm
           {...{  isHuman,
  openHuman,
  onSubmitHuman,
  onBackToProfile,
  student,guardian,checkIsHuman,
  }}
           />
         }
         {
           verify&&<VerifyForm {...{openVerify,onSubmitVerify,verifyCode,verifyCodeError,setVerifyCode}}/>
         }

        </React.Fragment>
      );
    
  }
  
