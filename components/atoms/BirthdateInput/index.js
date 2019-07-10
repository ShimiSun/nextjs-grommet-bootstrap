

import React from 'react';
import {DateInput} from 'grommet-controls'
import moment from 'moment'

export default (props)=><DateInput
{...props}
bounds={[
  moment().subtract(50, 'years').format('MM/DD/YYYY'),
  moment().subtract(13, 'years').format('MM/DD/YYYY')     
]}

/>