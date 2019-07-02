import React from 'react'
import AppLayout from 'components/Layouts/AppLayout'
import {
    Box,Button, Anchor
  } from "grommet";  
  import Link from 'next/link';
  import {Mail, Phone} from 'grommet-icons';
import About from 'components/containers/About'

export default ()=><AppLayout>
 <Box pad='medium' fill background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}>
      <Box align="center" direction="row" justify="between">
        <Box/>
        <Box wrap align="center" justify="center" pad="medium"  margin ="small" direction="row" gap="small">
        <Link href="/">
          <Button magin='small' primary  color='brand' label="HOME"/>
          </Link>
          <Button margin='small'  primary  color='brand' label="HOW IT WORK"/>  
        </Box>
     
      </Box>
      <Box align="center" direction="row" justify="between">
        <Box/>
        <Box/>
        <About/>
      </Box>
      
      </Box>
      <Box pad={{horizontal:'large'}} gap='small' background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}} width='stretch'  direction="row" justify="center" >
      <Button  label="CONNECT NOW" primary margin='medium' type='button'  alignSelf='center' />
     <Box alignSelf='center'>
     <Anchor  size='xsmall' icon={<Mail size='small' color='accent-1'/>} plain color='brand-mobi' label='info@takesavillage.com'/>
      <Anchor  size='xsmall' icon={<Phone size='small' color='accent-1'/>} plain color='brand-mobi' label='+1 (242) 444 - 4211'/>
      
     </Box>
      </Box>
</AppLayout>
