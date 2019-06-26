import React from 'react'
import { Box, Image,Button,ResponsiveContext,Anchor} from 'grommet';
import {Menu} from 'grommet-icons';
import Link from 'next/link';
import SocialLinks from 'components/atoms/SocialLinks'

export default  (props) => {
  const size = React.useContext(ResponsiveContext)
const {searchbox,openForSignin,showSidebar}=props
  return <Box responsive ={false} direction='row'  background='brand' elevation="small" style={{ zIndex: `${!showSidebar?'1':undefined}` }}> {/** header starts */}
  
        <Box
        width="xxlarge"
        as="header"
        pad="small"
        alignSelf="center"
        direction="row"
        justify="between"
      >
        <Box
          flex={false}
          direction="row"
          align="center"
          margin={{ left: `small` }}
          gap="xxsmall"
        >
         <Link href="/">
         <Anchor primary label={
           <Box>
              <Image
         
         fit="contain"
         src="/static/imgs/tav-header-symbol.png"
         size='xxsmall'
       />
           </Box>
         }
          />
        
         </Link>
         
          
        </Box>
        {size !== `small` && (<SocialLinks/>)}
        <Box
            margin={{ horizontal: `xxsmall` }}
            direction="row"
           // align="center"
            gap="xsmall"
          >
             {/** the search box start */}
           {searchbox}
  {/** the search box end */}
       {size !== `small`? <Button pad='small' label="SIGN IN" onClick={openForSignin} margin='xsmall'/>
            :
            <Button
            icon={<Menu />}
            plain
            onClick={openForSignin}
          />
            }
          </Box>
         
      </Box>
     
      </Box>
}