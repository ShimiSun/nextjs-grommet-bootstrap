import React from 'react'
import { Grommet, Box, Button, Text, Heading, Paragraph } from 'grommet'
import { Tag } from 'grommet-icons'


const Screen1 = (/* {  setScreen  } */) => {
 // const [layer, setLayer] = React.useState()
  return (
  <Grommet style={{"height":"80vh"}}>
    <Box fill="vertical" background={{"image":"url('http://socialprotection-humanrights.org/wp-content/uploads/2015/05/water-san.jpg')","dark":true}}>
      <Box align="center" direction="row" justify="between">
        <Box align="center" justify="center" direction="row">
          <Button label="">
            <Box align="center" justify="center" pad="small" direction="row" gap="small">
              <Tag  />
              <Text weight="bold">
                charity: water
              </Text>
            </Box>
          </Button>
          <Button label="" hoverIndicator>
            <Box align="center" justify="center" pad="small" direction="row" gap="small">
              <Text>
                WHY WATER?
              </Text>
            </Box>
          </Button>
          <Button label="" hoverIndicator>
            <Box align="center" justify="center" pad="small" direction="row" gap="small">
              <Text>
                OUR WORK?
              </Text>
            </Box>
          </Button>
        </Box>
        <Box align="center" justify="center" pad="small" direction="row" gap="small">
          <Button label="DONATE" />
          <Button label="FUNDRAISE" />
          <Button label="" hoverIndicator>
            <Box align="center" justify="center" pad="small" direction="row" gap="small">
              <Text>
                SIGN IN
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box align="stretch" pad="large" direction="row" background={{"dark":false}}>
        <Box align="start" basis="large" flex={false} background={{"dark":true}} pad="medium" gap="small">
          <Heading margin="none">
            Clean water changes everything.
          </Heading>
          <Paragraph>
            charity: water brings clean and safe drinking water to developing countries, improving health, education, and opportunity - especially for women and children.
          </Paragraph>
          <Button label="DONATE NOW" primary />
        </Box>
      </Box>
    </Box>
  </Grommet>
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