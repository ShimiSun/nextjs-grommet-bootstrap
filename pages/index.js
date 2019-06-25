import React from 'react'
import {Box, Button, Heading, Paragraph,ResponsiveContext} from 'grommet'
import AppLayout from 'components/Layouts/AppLayout'
import Link from 'next/link';


const Screen1 = (/* {  setScreen  } */) => {
  const size = React.useContext(ResponsiveContext)
  return (<AppLayout>
    
    <Box  fill background={size!=='small'?{"image":"url('static/imgs/tav-heru-bkgd4.png')","dark":true}:{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}>
      <Box align="center" direction="row" justify="between">
        <Box/>
        <Box align="center" justify="center" pad="medium" direction="row" gap="small">
        <Link href="/about">
          <Button label="ABOUT US"/>
          </Link>
          <Button label="HOW IT WORK"/>  
        </Box>
      </Box>
      <Box alignSelf={size!=='small'?'start':'center'}  align="center" alignContent="between" pad="medium" direction="row" background={{"dark":false}} >
        <Box align="start" basis="large" flex={false} background={{"dark":true}} pad="xsmall" gap="small">
          <Heading  level={size!=='small'?'2':'1'} margin="none">
            Crowdfund your education.
          </Heading>
         
          <Paragraph>
          Takesavillage allows students to build campaigns to crowdfund their education while connecting with a network of licensed Financial Educators.
          Connect with friends, family, schools, and businesses who are interested in funding {"students'"} education because it takes a village to educate a child.
          </Paragraph>
          <Button label="CONNECT NOW" primary margin='medium' type='button' size='large' alignSelf='start' />
        </Box>
      </Box>
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