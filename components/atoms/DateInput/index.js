

import React from 'react';
import {DateInput} from 'grommet-controls'
import moment from 'moment'

export default ({min,max, ...props})=><DateInput
{...props}
bounds={[
  moment(new Date()).subtract(max, 'years').format('MM/DD/YYYY'),
  moment(new Date()).subtract(min, 'years').format('MM/DD/YYYY')     
]}

/>