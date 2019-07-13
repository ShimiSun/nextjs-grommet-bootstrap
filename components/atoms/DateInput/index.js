

import React from 'react';
import {DateInput} from 'grommet-controls'
import moment from 'moment'

export default ({min,max, ...props})=><DateInput
{...props}
bounds={[
  moment().subtract(max, 'years').format('MM/DD/YYYY'),
  moment().subtract(min, 'years').format('MM/DD/YYYY')     
]}

/>