import React from 'react'
import {Box, Button, Heading, Paragraph} from 'grommet'
import AppLayout from 'components/Layouts/AppLayout'


const Screen1 = (/* {  setScreen  } */) => {
 // const [layer, setLayer] = React.useState()
  return (<AppLayout>
    
    <Box fill background={{"image":"url('static/imgs/tav-heru-bkgd4.png')","dark":true}}>
      <Box align="center" direction="row" justify="between">
        <Box/>
        <Box align="center" justify="center" pad="small" direction="row" gap="small">
          <Button label="ABOUT US" href='/about'/>
          <Button label="OUR WORK" />  
        </Box>
      </Box>
      <Box align="stretch" pad="medium" direction="row" background={{"dark":false}}>
        <Box align="start" basis="large" flex={false} background={{"dark":true}} pad="xsmall" gap="xxsmall">
          <Heading margin="none">
            Crowdfund your
          </Heading>
          <Heading margin="none">
           education.
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