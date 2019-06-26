import React from 'react'
import { Box, Button,ResponsiveContext,Layer,Collapsible} from 'grommet';
import SocialLinks from 'components/atoms/SocialLinks'
import { FormClose,} from 'grommet-icons';

export default  ({showSidebar,children,onClose}) => {
  const size = React.useContext(ResponsiveContext)

  return <React.Fragment>
  {(!showSidebar || size !== 'small') ? (
    <Collapsible direction="horizontal" open={showSidebar}>
  {/**
  The sidebar box has a medium width with a light-2 background.
   */}
   <Box 
              flex
              width='sidebar'
              background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}
              elevation='small'
              align='center'
              justify='center'
              overflow={{ horizontal: 'hidden' }}
            >
              {children}
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
 overflow={{ horizontal: 'hidden' }}
>
<SocialLinks/>
 <Button
   icon={<FormClose />}
   onClick={onClose}
 />
</Box>
   <Box
     fill
 background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}
     align='center'
     justify='center'
   >
    {children}
   </Box>
 </Layer>
  )}
  </React.Fragment>
}