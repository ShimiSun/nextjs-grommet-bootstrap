import React from "react";

import {
  Text,
FormField,
} from "grommet";
import ZipInput from 'components/atoms/ZipInput'
import StreetInput from 'components/atoms/StreetInput'
import FormContainer from 'components/containers/FormContainer'
import config from 'config'

const {abbrvState,}=config




export default ({
  openAddress,
  onSubmitAddress,
  onBackToCredentials,
street,streetError,validateStreet,
  zip,zipError,validateZip,
state,city
  }) => <FormContainer
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