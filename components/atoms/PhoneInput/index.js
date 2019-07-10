

import React from 'react';
import {MaskedInput} from 'grommet-controls'

export default (props)=><MaskedInput
placeholderChar='_'
mask={['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
placeholder='US Phone'
{...props}
// showMask
keepCharPositions
/>
