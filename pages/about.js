import React from 'react'
import AppLayout from 'components/Layouts/AppLayout'
import {
    Box,Button, Anchor,ResponsiveContext
  } from "grommet";  
 import Link from 'next/link';
  import {Mail, Phone,Previous} from 'grommet-icons';
import About from 'components/containers/About'


export default ()=>{
  const size = React.useContext(ResponsiveContext)
  const [show,setShow]=React.useState('/')

  const getSelected=(value)=>{

  setShow(value)

  }

    return <AppLayout>
    <Box alignContent='center' pad='medium' fill background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}>
        {size!=='small'? <Box align="center" direction="row" justify="between">
           <Box/>
           <Box align="center" justify="center" pad="medium"  margin ="small" direction="row" gap="small">
           <Link href="/">
             <Button magin='small' primary  color='brand' label="HOME"/>
             </Link>
             <Button margin='small'  primary  color='brand' label="HOW IT WORK"/>  
           </Box>
        
         </Box>:
         <Box align="start" justify="start" pad="small" direction="row" alignSelf="start">
        { !show?<Link href='/'>
         <Button   label="BACK" plain icon={<Previous color="brand-mobi"/>}   hoverIndicator={false} disabled={false} reverse={false} />
         </Link>:null} 
        </Box>
         }
         <Box align="center" direction="row" justify="between">
           <Box/>
           
           <About getSelected={getSelected}/>
         </Box>
         
         </Box>
         <Box pad={{horizontal:'large'}} gap='small' background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}} width='stretch'  direction="row" justify="center" >
         <Button  label="CONNECT NOW" primary margin='medium' type='button'  alignSelf='center' />
       {size!=='small'&& <Box alignSelf='center'>
        <Anchor  size='xsmall' icon={<Mail size='small' color='accent-1'/>} plain color='brand-mobi' label='info@takesavillage.com'/>
         <Anchor  size='xsmall' icon={<Phone size='small' color='accent-1'/>} plain color='brand-mobi' label='+1 (242) 444 - 4211'/>
         
        </Box>}

         </Box>
   </AppLayout>

}


