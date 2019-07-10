

import React from 'react';
import {MaskedInput} from 'grommet-controls'

export default (props)=><MaskedInput

pipe={conformedValue => ({ value: conformedValue.toUpperCase() })}
{...props}
// showMask
keepCharPositions
/>
