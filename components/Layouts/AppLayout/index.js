import React from 'react'
import {
   Layer,
   Box,
   Button,
   Collapsible,
   ResponsiveContext,
  } from 'grommet';
// import dynamic from 'next/dynamic';
import { FormClose} from 'grommet-icons';
import AppBar from 'components/organisms/AppBar'
import UserSearchBox from 'components/molecules/UserSearchBox'
import SocialLinks from 'components/atoms/SocialLinks'


export default ({children})=>   
{
 
  const [showSidebar,setShowSidebar]=React.useState(false)
  const [reason,setReason]=React.useState('donate')

  const openForSignin=()=>{
    setShowSidebar(true)
    setReason('signin')
  }

  const getSelectedUserId = (id) => {
    setShowSidebar(!!id)
  };

  const searchbox =<UserSearchBox {...{getSelectedUserId}}/> // add user serachbox into AppBar

  return (<ResponsiveContext.Consumer>
   {size => ( 
    <Box fill>{/** We add a Box to fill all the available space so that we have a flexbox container to rely on */}
    <AppBar {...{openForSignin,showSidebar,searchbox}}/> {/** the AppBar component with user searchbox integrated */}

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
    {(!showSidebar || size !== 'small') ? (
      <Collapsible direction="horizontal" open={showSidebar}>
    {/**
    The sidebar box has a medium width with a light-2 background.
     */}
     <Box 
                flex
                width='sidebar'
                background='brand-mobi'
                elevation='small'
                align='center'
                justify='center'
                
              >
                <Button label={reason} primary  margin='medium' type='button' size='large' alignSelf='start' /> 
              </Box>
   
    </Collapsible>
    ): (
   <Layer>
    <Box
   background='brand-mobi'
   tag='header'
   justify='end'
   align='center'
   direction='row'
   elevation='small'
   style={{ zIndex: '1' }}
 >
 <SocialLinks/>
   <Button
     icon={<FormClose />}
     onClick={() => setShowSidebar(false)}
   />
 </Box>
     <Box
       fill
       background='brand'
       align='center'
       justify='center'
     >
       <Button label={reason} primary margin='medium' type='button' size='large' alignSelf='start' /> 
     </Box>
   </Layer>
    )}
  </Box>
  </Box> 
  )}
  </ResponsiveContext.Consumer>
  )
}  