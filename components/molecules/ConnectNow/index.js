import React from "react";

import {
  Box,
  Button,
  Heading,
  Layer,
  Form,
  Text,
  CheckBox,FormField,TextInput,// Select
} from "grommet";
import {isEmail,isMobilePhone,matches} from 'validator';
import PasswordInput from 'components/atoms/PasswordInput'
import {MaskedInput,DateInput} from 'grommet-controls'
import {FormClose} from 'grommet-icons'
import isValidZip from 'is-valid-zip';
import config from 'config'
import moment from 'moment'
import StateSearchBox from 'components/molecules/StateSearchBox'

const {schema,getAddress,expandState,abbrvState,}=config

const PhoneInput = (props)=><MaskedInput
placeholderChar='_'
mask={['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
placeholder='US Phone'
{...props}
// showMask
keepCharPositions
/>

const StreetInput = (props)=><MaskedInput

pipe={conformedValue => ({ value: conformedValue.toUpperCase() })}
{...props}
// showMask
keepCharPositions
/>

const ZipInput = (props)=><MaskedInput
placeholderChar='_'

mask={[MaskedInput.digit,' ', MaskedInput.digit, ' ', MaskedInput.digit,' ',  MaskedInput.digit, ' ',MaskedInput.digit]}

{...props}
// showMask
keepCharPositions
/>

const MoneyInput = (props)=><MaskedInput
{...props}
mask={MaskedInput.createNumberMask({ allowDecimal: true })}
/>

const BirthdateInput = (props)=><DateInput
{...props}
bounds={[
  moment().subtract(50, 'years').format('MM/DD/YYYY'),
  moment().subtract(13, 'years').format('MM/DD/YYYY')     
]}

/>
/*
const UniStateInput=(props)=>{

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



const MultiStateInput=(props)=>{

  const [options,setOptions]=React.useState(statessArray())

  return <Select
  {...props}
  dropHeight='medium'
  options={options}
  multiple
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
  console.log('creat now: ',prospectiveStates)
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
            
              <FormContainer
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
             
          )}
          {address && (
           <FormContainer
              step={2}
              heading="Your street address:"
              open={openAddress}
              forward={onSubmitAddress}
              back={onBackToCredentials}
              >
 <FormField 
         //  help='Enter a valid e-mail address'
            component={StreetInput}
           label="Street" 
           name="street" 
           type="text" 
           required 
           value={street}
         error={streetError}
          onChange={event => validateStreet(event.target.value)}
           />

<FormField
          //  help='Atleast 8 characters (a digit, lowercase and uppercase letter)'
           component={ZipInput}
              label="Zip Code"
              name="zip"
              required
          error={zipError}
              value={zip}
              onChange={(e)=> validateZip(e.target.value)}
              />

             {street&&state&&(!zipError&&!streetError)&& 
             <Text>{`${street}, ${city}, ${abbrvState(state)} ${zip}`}</Text>}
              </FormContainer>
             
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
               <FormField
      label="Probable study state(s) (if not yet in college)"
      name="prospective states"
      component={StateSearchBox}
      value={prospectiveStates}
      onChange={event => setProspectiveStates(event.target.value)}
      />
              
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
      label="Probable study state(s) (if not yet in college)"
      name="prospective states"
      component={StateSearchBox}
      value={prospectiveStates}
      onChange={event => setProspectiveStates(event.target.value)}
      />
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
  
const FormContainer = ({step,heading,children,open,back,forward})=>
<Layer
            animate
             position="center"
              modal
              onClickOutside={()=>open(true)}
              onEsc={()=>open(false)}
            >
               <Box
 background='brand'
 tag='header'
 justify='end'
 align='center'
 direction='row'
 elevation='small'
 style={{ zIndex: '1' }}
 overflow='hidden'
>
<Text color='accent-1'>
 Step {step} of 4
</Text>
 <Button
   icon={<FormClose  />}
   onClick={()=>open(false)}
 />
</Box>
          <Box background='brand-mobi' pad="medium" gap="small" width="medium">
              <Heading color='brand' level={4} margin="none">
                 {heading} 
                </Heading>
              <Form  onSubmit={({ value }) =>forward(value)}>
              {children}

              <Box
                  as="footer"
                  gap="small"
                  direction="row"
                  align="center"
                  justify="end"
                  pad={{ top: "medium", bottom: "small" }}
                >
                {step>1&& <Button type='button'
label="Back"  color="brand" onClick={back}/>}
                  <Button type='submit'
 primary label={step<4 ?"Next":`${step===4?"Connect":"Verify"}`}  color="brand" />
                
                </Box>
</Form>
              
                
              </Box>
            </Layer>