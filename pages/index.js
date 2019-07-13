import React from 'react'
import {Box, Button, Heading, Paragraph,ResponsiveContext} from 'grommet'
import AppLayout from 'components/Layouts/AppLayout'
import Link from 'next/link';
import ConnectNow from 'components/molecules/ConnectNow';


const Screen1 = (/* {  setScreen  } */) => {
  const size = React.useContext(ResponsiveContext)
  return (<AppLayout>
    
    <Box pad='large' fill background={size!=='small'?{"image":"url('static/imgs/tav-heru-bkgd-mobi1.png')","dark":true}:{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}>
      <Box align="center" direction="row" justify="between">
        <Box/>
        <Box wrap align="center" justify="center" pad="medium"  margin ="small" direction="row" gap="small">
        <Link href="/about">
          <Button magin='small' primary  color='brand' label="ABOUT US"/>
          </Link>
          <Link href="/campaigns?category='guardian" as="/campaigns/guardian">
          <Button margin='small'  primary  color='brand' label="HOW IT WORK"/> 
          </Link>
           
        </Box>
        <Box/>
      </Box>
      
        
      {
size==='small'?<MobiHeroContent/>:<HeroContent/>
      }
          
      </Box>
      

 
  
  </AppLayout>
  )
}

const screens = {
  1: Screen1
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}

const MobiHeroContent=()=> <Box
fill
color='nuetral-1'
alignSelf='center'
alignContent='center'
justify='center'
align='center'
pad='medium'

>
<Heading textAlign='center' color='brand-mobi'  level='3' margin="none">
            Crowdfund your education.
          </Heading>
         
          <Paragraph size='small' color='white' textAlign='center' basis="small" pad='small'>
          Takesavillage allows students to build campaigns to crowdfund their education while connecting with a network of licensed Financial Educators. 
          Connect with friends, family, schools, and businesses who are interested in funding {"students'"} education because it takes a village to educate a child.
          </Paragraph>
          <ConnectNow/>
         
</Box>

const HeroContent =()=><Box margin='medium    '  >
<Box  justify='start' align="start" basis="large" flex={false} background={{"dark":true}}  gap="small">
  <Heading color='brand-mobi' level='2' margin="none">
            Crowdfund your education.
          </Heading>
         
          <Paragraph textAlign='start' basis="small" pad='small'>
          Takesavillage allows students to build campaigns to crowdfund their education while connecting with a network of licensed Financial Educators. 
          Connect with friends, family, schools, and businesses who are interested in funding {"students'"} education because it takes a village to educate a child.
          </Paragraph>
          <ConnectNow/>
         
</Box>
</Box>