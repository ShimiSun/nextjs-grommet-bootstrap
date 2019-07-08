import React from "react";

import {
  Box,
  Button,
  Heading,
  Layer,
  Form,
  Text,
  CheckBox,FormField,TextInput
} from "grommet";
import {isEmail,isMobilePhone,matches} from 'validator';
import PasswordInput from 'components/atoms/PasswordInput'
import {MaskedInput} from 'grommet-controls'
import {FormClose} from 'grommet-icons'
import isValidZip from 'is-valid-zip';
import config from 'config'

const {schema,getAddress,expandState,abbrvState}=config

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

const onSubmitAddress= value=>{
  console.log('connect data: ',value)
  openAddress(false)
 openForm(true)
}

const onBackToCredentials= ()=>{
  openCredentials(true)
  openAddress(false)
}

      return (
        <React.Fragment>
          <Box>
           
            <Button  onClick={()=>openCredentials(true)}
              label="CONNECT NOW" primary margin='medium' type='button'  alignSelf='center' />
          </Box>
          {credentials && (
            <Layer
            animate
             position="center"
              modal
              onClickOutside={()=>openCredentials(false)}
              onEsc={()=>openCredentials(false)}
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
  Thanks for chosing takesavillage
</Text>
 <Button
   icon={<FormClose  />}
   onClick={()=>openCredentials(false)}
 />
</Box>
          <Box background='brand-mobi' pad="medium" gap="small" width="medium">
              <Heading color='brand' level={4} margin="none">
                 {"We'll need your"} credentials:
                </Heading>
              <Form  onSubmit={({ value }) => onSubmitCredentials(value)}>
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
              <Box
                  as="footer"
                  gap="small"
                  direction="row"
                  align="center"
                  justify="end"
                  pad={{ top: "medium", bottom: "small" }}
                >
                  <Button type='submit'
 primary label="Next"  color="brand" />
                
                </Box>
              </Form>
              
                
              </Box>
            </Layer>
          )}
          {address && (
            <Layer
            animate
             position="center"
              modal
              onClickOutside={()=>openCredentials(false)}
              onEsc={()=>openCredentials(false)}
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
  Thanks for chosing takesavillage
</Text>
 <Button
   icon={<FormClose  />}
   onClick={()=>openCredentials(false)}
 />
</Box>
          <Box background='brand-mobi' pad="medium" gap="small" width="medium">
              <Heading color='brand' level={4} margin="none">
                 Your street address:
                </Heading>
              <Form  onSubmit={({ value }) => onSubmitAddress(value)}>
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
              <Box
                  as="footer"
                  gap="small"
                  direction="row"
                  align="center"
                  justify="end"
                  pad={{ top: "medium", bottom: "small" }}
                >
                 <Button type='button'
label="Back"  color="brand" onClick={onBackToCredentials}/>
                  <Button type='submit'
 primary label="Next"  color="brand" />
                
                </Box>
              </Form>
              
                
              </Box>
            </Layer>
          )}
          {form&& (
            <Layer
             animate
             position="center"
              modal
              onClickOutside={()=>openForm(false)}
              onEsc={()=>openForm(false)}
            >

<Box background='brand-mobi'
               pad="medium" gap="small" width="medium">
               
                <Box direction='column'>
                
              <Heading color='brand' level={4} margin="none">
                  You are connecting as a:
                </Heading>
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
                </Box>

                <Box
                  as="footer"
                  gap="small"
                  direction="row"
                  align="center"
                  justify="end"
                  pad={{ top: "medium", bottom: "small" }}
                >
                  <Button label="Close" onClick={()=>openForm(false)} color="dark-3" />
                </Box>    
          </Box>
            </Layer>
          )}
        </React.Fragment>
      );
    
  }
  
  