import React from "react";
import {SidebarContext} from 'components/Layouts/AppLayout'
import { Box,Grid,Button,ResponsiveContext, Heading, Paragraph,Video,Text,
  Tab,
  Tabs,
Image,Carousel
} from "grommet";
import {Previous,Group,UserManager,UserExpert,LinkNext} from 'grommet-icons'
import Link from 'next/link';


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
     
     {selected==='Who we serve'&&
     <Box round elevation='small' fill='vertical' width='large' alignSelf='center' background={{color:'brand',opacity:'0.4'}} pad='medium'>
     <Whoweserve/>
     </Box>
     }
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


  const WhoweareMobile =({backToMenu})=><Box direction='column' fill>
 
  <Box align="start" justify="start" pad="small" direction="row" alignSelf="start">
            <Button  onClick={backToMenu} label="BACK" plain icon={<Previous />}   hoverIndicator={false} disabled={false} reverse={false} />
  </Box>
          <Box align='center' justify='center'  margin={{top:"large"}} pad='small'>
          <Heading  level='2' margin='none' >Precisely this is who we are:</Heading>
  <Paragraph
  
  magin='none'
               
                size='small'
             
                >
               Takesavillage allows students to build campaigns to crowdfund their education while connecting with 
               a network of financial educators.
               
              Our mission is to provide a secure virtual platform to connect with friends, 
               family, schools, and businesses who are interested in funding {"students'"} education.
               Why? Because it takes a village to educate a child. 
                 </Paragraph>
  </Box>
      <Box align='center' justify='start'  pad="medium" gap='small'>
      <Box/>
      <Video fit="cover" controls="over">
      <source key="video" src='static/vids/tvillage-story-min.mp4' />
      <track
        key="cc"
        label="English"
        kind="subtitles"
        srcLang="en"
        src="static/imgs/kateBoswell.jpg"
        default
      />
    </Video>
    
    <Text size='xsmall' margin='none' color='brand-mobi'>
         Kate Boswel, the founder of Takesavillage, tells the story.
                </Text>
    </Box>
    </Box>
  const RichTabTitle = ({ icon, label }) => (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      {icon}
      <Text size="small">
        <strong>{label}</strong>
      </Text>
    </Box>
  );

const Whoweserve= () => {
const [activetab,setActivetab]=React.useState('students')

return (
   
  <Tabs flex={false} background='brand-mobi'>
  <Tab 
  title={<RichTabTitle icon={<Group/>} label='Students'/>}
  onActive={()=>setActivetab('students')}
  >
 <VerticalPost
 {...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/student1.jpg" />
  <Image fit="cover" src="static/imgs/student2.jpg" />
</Carousel>
</Box>
 }
 category='We support over 9400 Students'
 description="Legendary assassin retired from his violent career after marrying the love of his life.
 Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
 steal John's prized car and kill the puppy that was a last gift from his wife,
 John unleashes the remorseless killing machine within and seeks vengeance.
      "
 />
  </Tab>
  <Tab 
  title={<RichTabTitle icon={<UserManager/>} label='Guardians'/>}
  onActive={()=>setActivetab('guardians')}
  >
<VerticalPost
{...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/guardian1.jpg" />
  <Image fit="cover" src="static/imgs/guardian2.jpg" />
</Carousel>
</Box>
 }
 category='Over 900 Guardians have benefited'
 description="Legendary assassin retired from his violent career after marrying the love of his life.
 Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
 steal John's prized car and kill the puppy that was a last gift from his wife,
 John unleashes the remorseless killing machine within and seeks vengeance.
      "
 />
  </Tab>
  <Tab 
    title={<RichTabTitle icon={<UserExpert/>} label='Financial Educators'/>}
    onActive={()=>setActivetab('financialeducators')}
  >
<VerticalPost
{...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/financialeducator1.png" />
  <Image fit="cover" src="static/imgs/financialeducator2.jpg" />
</Carousel>
</Box>
 }
 category='238 Financial Educators onboard'
 description="Legendary assassin retired from his violent career after marrying the love of his life.
 Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
 steal John's prized car and kill the puppy that was a last gift from his wife,
 John unleashes the remorseless killing machine within and seeks vengeance.
      "
 />
  </Tab>
</Tabs>
  
);

  
}
  
  const VerticalPost = ({media,category,description,activetab}) => (
    <Box direction='row' fill >
        
    <Box align='start' margin={{top:'large'}}  gap='small' justify='start'>
    <Heading textAlign='center' level='4' margin='none' color='brand-mobi'>{category}</Heading>
   {media}
    </Box>
  
  <Box pad='medium' justify='center' fill='horizontal'>
            <Box fill>
             
          
              <Paragraph
             
              color='white'
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: '10',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
             {description}
              </Paragraph>
              <Paragraph/>
            </Box>
            <Box align="end" justify="end" pad="small" direction="row" alignSelf="end">
            <Link href={`/${activetab}`}>
            <Button reverse  label="SEE MORE" plain icon={<LinkNext />} color='accent-1'  hoverIndicator={false} disabled={false} />
            </Link>
            
  </Box>
          </Box>
</Box>
  );
    
  