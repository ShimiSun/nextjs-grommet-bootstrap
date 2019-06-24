import React from 'react'
import { Box, Image,Button,ResponsiveContext,Anchor} from 'grommet';
import { Twitter,Facebook,Linkedin,Mail,Menu} from 'grommet-icons';
import config from 'config'
import Link from 'next/link';

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
        {size !== `small` && (
          <Box
            margin={{ horizontal: `large` }}
            direction="row"
            align="center"
            gap="medium"
          >
          <Box responsive ={false} direction='row' align="center" justify="center">
  <Button label="" hoverIndicator
             rel="noopener noreferrer"
              target="_blank"
              a11title="Linkedin"
              icon={<Linkedin />}
              href={`https://linkedin.com/${config.linkedin}/`}
            />
            <Button
            label="" hoverIndicator
              rel="noopener noreferrer"
              target="_blank"
              a11title="Twitter"
              icon={<Twitter />}
              href={`https://twitter.com/${config.twitter}`}
            />
            <Button
            label="" hoverIndicator
              rel="noopener noreferrer"
              target="_blank"
              a11title="Facebook"
              icon={<Facebook />}
              href={`https://facebook.com/${config.facebook}`}
            />
            <Button
            label="" hoverIndicator
              rel="noopener noreferrer"
               target="_blank"
              a11title="Email"
              icon={<Mail />}
              href={`mailto:${config.email}`}
            />
            
          </Box>
          
          </Box>
        )}
        <Box
            margin={{ horizontal: `xxsmall` }}
            direction="row"
           // align="center"
            gap="xsmall"
          >
             {/** the search box start */}
           {searchbox}
  {/** the search box end */}
       {size !== `small`? <Button pad='small' label="Sign in" hoverIndicator onClick={openForSignin} margin='xsmall'  />
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