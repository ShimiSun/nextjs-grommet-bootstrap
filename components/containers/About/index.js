import React from "react";
import {SidebarContext} from 'components/Layouts/AppLayout'
import { Box,Grid,Button,ResponsiveContext, Heading, Paragraph,Video,Text} from "grommet";
import {Previous} from 'grommet-icons'
// import { Card, Avatar, IconButton  } from 'grommet-controls';



export default ({getSelected})=> {
    const showSidebar = React.useContext(SidebarContext)
    const size = React.useContext(ResponsiveContext)
    const [selected,setSelected]=React.useState('Who we are')
    
    
    const notMobileAreas =!showSidebar?[
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]:[
        { name: "main", start: [0, 0], end: [0, 0] },
      ]

      React.useEffect( () => {
        
       getSelected(selected)
     }, [getSelected, selected, size]);

      React.useEffect( () => {
        
       if(size==='small'){
         setSelected('')
       }else{
         setSelected('Who we are')
       }
    }, [size]);

    return (
      <Grid
      fill
      areas={size!=='small'?notMobileAreas:[
        { name: "nav", start: [0, 0], end: [0, 0] },
      ]}
      columns={size==='small'||showSidebar?["flex"]:["medium", "flex"]}
      rows={["flex"]}
      gap="medium"
      justifyContent='center'
    >
      

      {!showSidebar&&size!=='small'&&
<Box  gridArea="nav" wrap align="center" justify="center" pad="small"  margin ="small" direction="column" gap="medium">
<Button active={selected==='Who we are'} alignSelf='stretch'   color={selected==='Who we are'?'accent-1':'brand'} label="WHO WE ARE" onClick={()=>setSelected('Who we are')}/>
<Button active={selected==='What we do'} alignSelf='stretch'   color={selected==='What we do'?'accent-1':'brand'} label="WHAT WE DO" onClick={()=>setSelected('What we do')}/> 
<Button active={selected==='Who we serve'} alignSelf='stretch' color={selected==='Who we serve'?'accent-1':'brand'} label="WHO WE SERVE" onClick={()=>setSelected('Who we serve')}/>  
<Button active={selected==='whatotherssay'} alignSelf='stretch' color={selected==='whatotherssay'?'accent-1':'brand'} label="WHAT OTHERS SAY" onClick={()=>setSelected('whatotherssay')}/>   
<Button active={selected==='wherewearegoing'} alignSelf='stretch' color={selected==='wherewearegoing'?'accent-1':'brand'} label="WHERE WE ARE GOING" onClick={()=>setSelected('wherewearegoing')}/>  
</Box> 
      }

      {!selected&&size==='small'&&
<Box  gridArea="nav" wrap align="center" justify="center" pad="small"  margin ="small" direction="column" gap="medium">
<Button active={selected==='Who we are'} alignSelf='stretch'   color={selected==='Who we are'?'accent-1':'brand'} label="WHO WE ARE" onClick={()=>setSelected('Who we are')}/>
<Button active={selected==='What we do'} alignSelf='stretch'   color={selected==='What we do'?'accent-1':'brand'} label="WHAT WE DO" onClick={()=>setSelected('What we do')}/> 
<Button active={selected==='Who we serve'} alignSelf='stretch' color={selected==='Who we serve'?'accent-1':'brand'} label="WHO WE SERVE" onClick={()=>setSelected('Who we serve')}/>  
<Button active={selected==='whatotherssay'} alignSelf='stretch' color={selected==='whatotherssay'?'accent-1':'brand'} label="WHAT OTHERS SAY" onClick={()=>setSelected('whatotherssay')}/>   
<Button active={selected==='wherewearegoing'} alignSelf='stretch' color={selected==='wherewearegoing'?'accent-1':'brand'} label="WHERE WE ARE GOING" onClick={()=>setSelected('wherewearegoing')}/>  
</Box> 
      }

      {selected==='Who we are'&&size==='small'&&
<WhoweareMobile backToMenu={()=>setSelected('')}/> 
      }
     
     {size!=='small'&& <Box gridArea="main" background="transparent">
     {selected==='Who we are'&&<WhoweareDesktop {...{showSidebar}}/>}
     </Box>
     }
    </Grid>
    );
  
}


const WhoweareDesktop = ({showSidebar}) => (
    <Box direction='row' fill>
        
    <Box align='start' justify='start'  pad="medium" gap='small'>
   
      <Video controls="over" fit="contain">
      <source
          src="static/vids/tvillage-story-min.mp4"
          type="video/mp4"
          controls="below"
        />
      </Video>
      <Text size='xsmall' margin='none' color='brand-mobi'>
         Kate Boswel, the founder of Takesavillage, tells the story.
                </Text>
    </Box>
  
  <Box pad='medium' justify='between' fill='horizontal'>
            <Box fill>
             
            {showSidebar&&<Heading level='3' margin='none' color='brand-mobi'>Precisely this is who we are:</Heading>}
              
              <Paragraph
              color='white'
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: '10',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
               Takesavillage allows students to build campaigns to crowdfund their education while connecting with 
               a network of financial educators.
               </Paragraph>
              <Paragraph
              color='white'
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: '10',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
              Our mission is to provide a secure virtual platform to connect with friends, 
               family, schools, and businesses who are interested in funding {"students'"} education.
                Why? Because it takes a village to educate a child. 
              </Paragraph>
              <Paragraph/>
            </Box>
           
          </Box>
</Box>
  );


  const WhoweareMobile =({backToMenu})=><Box fill>

<Box direction='row' gap='small' margin='small' >
<Box align="start" justify="start" pad="small" direction="row" alignSelf="start">
          <Button  onClick={backToMenu} label="" icon={<Previous color="brand-mobi"/>}   hoverIndicator={false} disabled={false} reverse={false} />
        </Box>
<Heading alignSelf='center'  textAlign='center' level='3' margin='none' color='brand-mobi'>Precisely this is who we are:</Heading>
</Box>
<Box align='center' justify='center'  margin={{top:"large"}} pad='small'>
<Paragraph

magin='none'
              color='white'
              size='small'
           
              >
               Takesavillage allows students to build campaigns to crowdfund their education while connecting with 
               a network of financial educators.
               
              Our mission is to provide a secure virtual platform to connect with friends, 
               family, schools, and businesses who are interested in funding {"students'"} education.
               Why? Because it takes a village to educate a child. 
               </Paragraph>
</Box>

       
              
<Box  size='small' align='center' justify='center'  margin="medium" pad='xlarge'>
   
   <Video controls="over" fit="cover">
   <source
       src="static/vids/tvillage-story-min.mp4"
       type="video/mp4"
       controls="below"
     />
   </Video>
   <Text size='xsmall' margin='none' color='brand-mobi'>
         Kate Boswel, the founder of Takesavillage, tells the story.
                </Text>
 </Box>



  </Box>
  