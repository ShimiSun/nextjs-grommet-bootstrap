import React from 'react'
import {
   Box,
  
  } from 'grommet';
 
import AppBar from 'components/organisms/AppBar'
import UserSearchBox from 'components/molecules/UserSearchBox'
import SideBar from 'components/organisms/SideBar';
import LoginForm from 'components/organisms/LoginForm';
import UserCard from 'components/molecules/UserCard'


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
    setReason(id)
  };

  const onClose=()=>setShowSidebar (false)

  const searchbox =<UserSearchBox {...{getSelectedUserId}}/> // add user serachbox into AppBar

  const onLogin = (value)=>{
    console.log("login with ",value)
  }

  return (
    <Box fill>{/** We add a Box to fill all the available space so that we have a flexbox container to rely on */}
    <AppBar {...{openForSignin,showSidebar,searchbox}} /> {/** the AppBar component with user searchbox integrated */}

<Box direction='row' flex overflow={{ horizontal: 'hidden',vertical:'hidden' }}>
   {/** The body is a Box with row direction.
   The flex prop instructs the Box to expand into the remaining available space 
   The overflow prop ensures that both the main panel and sidebar fit 
   within the width of the viewport, instead of having to scroll horizontally.
   */}
    <Box flex align='center' justify='center'>
     {children}
    </Box>
    <SideBar {...{showSidebar, onClose}}>
    <Box>
    {reason==='signin' ?<LoginForm {...{onClose,onLogin}}/> :<UserCard id={reason}/> }
    </Box>

    </SideBar>
  </Box>
  </Box> 
 
  )
}  

