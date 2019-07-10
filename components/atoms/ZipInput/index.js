

import React from 'react';
import {MaskedInput} from 'grommet-controls'

export default (props)=><MaskedInput
placeholderChar='_'

mask={[MaskedInput.digit,' ', MaskedInput.digit, ' ', MaskedInput.digit,' ',  MaskedInput.digit, ' ',MaskedInput.digit]}

{...props}
// showMask
keepCharPositions
/>
