

import React from 'react';
import {
    Box,
    Button,
    Heading,
    Layer,
    Form,
    Text,
   
  } from "grommet";
  import {FormClose} from 'grommet-icons'

export default ({step,heading,children,open,back,forward,disabled})=>
<Layer
            animate
             position="center"
              modal
              onClickOutside={()=>open(true)}
              onEsc={()=>open(false)}
            >
               <Box
 background='brand'
 tag='header'
 justify='end'
 align='center'
 direction='row'
 elevation='small'
 style={{ zIndex: '1' }}
 overflow='hidden'
>
<Text color='accent-1'>
 Step {step} of 7
</Text>
 <Button
   icon={<FormClose  />}
   onClick={()=>open(false)}
 />
</Box>
          <Box background='brand-mobi' pad="medium" gap="small" width="medium">
              <Heading color='brand' level={4} margin="none">
                 {heading} 
                </Heading>
              <Form  onSubmit={({ value }) =>forward(value)}>
              {children}

              <Box
                  as="footer"
                  gap="small"
                  direction="row"
                  align="center"
                  justify="end"
                  pad={{ top: "medium", bottom: "small" }}
                >
                {step>1&& step<7&&<Button type='button'
label="Back"  color="brand" onClick={back}/>}
                  <Button type='submit' {...{disabled}}
 primary label={step<6 ?"Next":`${step===6?"Connect":"Verify"}`}  color="brand" />
                
                </Box>
</Form>
              
                
              </Box>
            </Layer>