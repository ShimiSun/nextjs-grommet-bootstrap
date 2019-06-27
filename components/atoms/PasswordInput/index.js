

import React from 'react';
import { Box, Button,TextInput,} from 'grommet';
import { View,FormLock,} from 'grommet-icons';


export default ({value,onChange})=> {
  const [hide,setHide]=React.useState(true)

  return <Box direction="row" align="center">
  <TextInput plain type={!hide ? "text" : "password"} value={value}
          onChange={onChange}/>
  <Button
    icon={!hide ? <View /> : <FormLock />}
    onClick={()=>setHide(!hide)}
  />
  </Box>
}