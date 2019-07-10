

import React from 'react';
import {MaskedInput} from 'grommet-controls'

export default (props)=><MaskedInput
{...props}
mask={MaskedInput.createNumberMask({ allowDecimal: true })}
/>
