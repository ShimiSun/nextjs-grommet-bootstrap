import React from 'react'
import {Box,Button,Heading,Image,TextInput,Text,} from 'grommet'
import { Twitter,Facebook,Linkedin,Mail } from 'grommet-icons';
import AppBar from 'components/containers/AppBar'

export default ({children})=>   
<Box fill>
{
  /**
  We add a Box to fill all the available space so that we have 
  a flexbox container to rely on */
}

<AppBar>
<Box align="center" justify="center" pad={{"vertical":"small","right":"xlarge","left":"xsmall","bottom":"small","top":"medium","horizontal":"medium"}} direction="row" wrap alignSelf="start" basis="medium" width="medium" elevation="none" round="xsmall" gap="small" margin={{"bottom":"small","left":"small","right":"xlarge","horizontal":"medium"}} flex="grow">
<Heading level='3' margin='none'>
<Image
    fit="cover"
    src="/static/imgs/tav-header-symbol.png"
    size='xsmall'
  />
Takesavillage
      </Heading>
</Box>
      
      
      <Box align="center" justify="center" pad={{"vertical":"small","right":"large","left":"xsmall","bottom":"small","top":"medium","horizontal":"medium"}} direction="row" wrap alignSelf="start" basis="medium" width="medium" elevation="none" round="xsmall" gap="small" margin={{"bottom":"small","left":"small","right":"xlarge","horizontal":"medium"}} flex="grow">
      <Button label="" icon={<Facebook />} hoverIndicator/>
          <Button label="" icon={<Linkedin />} hoverIndicator />
          <Button label="" icon={<Twitter />} hoverIndicator/>
          <Button label="" icon={<Mail />} hoverIndicator />
          <Button label="" hoverIndicator>
            <Box align="center" justify="center" pad="small" direction="row" gap="small">
              <Text>
                SIGN IN
              </Text>
            </Box>
          </Button>
        </Box>
        
        <Box  align="center" justify="center" pad={{"vertical":"small","right":"large","left":"xsmall","bottom":"small","top":"medium","horizontal":"medium"}} direction="row" wrap alignSelf="start" basis="medium" width="medium" elevation="none" round="xsmall" gap="small" margin={{"bottom":"small","left":"small","right":"xlarge","horizontal":"medium"}} flex="grow">
         <TextInput placeholder="Search a user by name to donate to" />

        </Box>
        
    </AppBar>
<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
   {/** The body is a Box with row direction.
   
   The flex prop instructs the Box to expand into the remaining available space 
   (AppBar is taking some of the height in the container) 
   
   The overflow prop ensures that both the main panel and sidebar fit 
   within the width of the viewport, instead of having to scroll horizontally.
   */}
    <Box flex align='center' justify='center'>
     {children}
    </Box>
    <Box
      width='medium'
      background='light-2'
      elevation='small'
      align='center'
      justify='center'
    >
    {/**
    The sidebar box has a medium width with a light-2 background.
     */}
     sidebar
    </Box>
  </Box>
  </Box>   