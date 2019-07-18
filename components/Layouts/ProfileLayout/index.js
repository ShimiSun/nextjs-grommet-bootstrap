import React from 'react'
import {
   Box,
  
  } from 'grommet';
 
import AppBar from 'components/organisms/AppBar'
import UserSearchBox from 'components/molecules/UserSearchBox'


export const SidebarContext = React.createContext(false)

export default ({children})=>   
{
 // const [sidebarVisible, setSidebarVisible] = useState(false)
  const [showSidebar,setShowSidebar]=React.useState(false)
  

  const openForSignin=()=>{
    setShowSidebar(true)
   // setReason('signin')
  }

  const getSelectedUserId = (id) => {
    setShowSidebar(!!id)
    // setReason(id)
  };

 

  const searchbox =<UserSearchBox {...{getSelectedUserId}}/> // add user serachbox into AppBar

 

  return (
    <Box fill>{/** We add a Box to fill all the available space so that we have a flexbox container to rely on */}
    <AppBar {...{openForSignin,showSidebar,searchbox}} /> {/** the AppBar component with user searchbox integrated */}

<Box direction='row' flex overflow={{ horizontal: 'hidden', }}>
   {/** The body is a Box with row direction.
   The flex prop instructs the Box to expand into the remaining available space 
   The overflow prop ensures that both the main panel and sidebar fit 
   within the width of the viewport, instead of having to scroll horizontally.
   */}
    <Box flex align='center' justify='center'>
    <SidebarContext.Provider value={showSidebar}>
        {children}
    </SidebarContext.Provider>
    </Box>
  
  </Box>
  </Box> 
 
  )
}  

/**
 * // AppLayout

const SidebarContext = createContext(false)

export default function AppLayout({ children }) {
    const [sidebarVisible, setSidebarVisible] = useState(false)

    return <SidebarContext.Provider value={sidebarVisible}>
        {children}
    </SidebarContext.Provider>
}


// AboutContent

export default function AboutContent() {
    const sidebarVisible = useContext(SidebarContext)

    return (
        <div>
            {sidebarVisible && <AboutNav />}
            <Content />
        </div>
    )
}
 */