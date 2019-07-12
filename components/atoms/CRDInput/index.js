

import React from 'react';
import {MaskedInput} from 'grommet-controls'

export default (props)=><MaskedInput
{...props}
mask={[MaskedInput.digit,' ', MaskedInput.digit,' ', MaskedInput.digit, ' ', MaskedInput.digit,' ', MaskedInput.digit,' ', MaskedInput.digit,' ', MaskedInput.digit]}

placeholder='0 0 0 0 0 0 0'
placeholderChar={MaskedInput.placeholderChars.underscore}
/>
