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

<Button active={selected==='Who we serve'} alignSelf='stretch' color={selected==='Who we serve'?'accent-1':'brand'} label="WHO WE SERVE" onClick={()=>setSelected('Who we serve')}/>  
<Button active={selected==='What others say'} alignSelf='stretch' color={selected==='What others say'?'accent-1':'brand'} label="WHAT OTHERS SAY" onClick={()=>setSelected('What others say')}/>   
<Button active={selected==='In the media'} alignSelf='stretch' color={selected==='In the media'?'accent-1':'brand'} label="IN THE MEDIA" onClick={()=>setSelected('In the media')}/>  
</Box> 
      }

      {!selected&&size==='small'&&
<Box  gridArea="nav" wrap align="center" justify="center" pad="small"  margin ="small" direction="column" gap="medium">
<Button active={selected==='Who we are'} alignSelf='stretch'   color={selected==='Who we are'?'accent-1':'brand'} label="WHO WE ARE" onClick={()=>setSelected('Who we are')}/>

<Button active={selected==='Who we serve'} alignSelf='stretch' color={selected==='Who we serve'?'accent-1':'brand'} label="WHO WE SERVE" onClick={()=>setSelected('Who we serve')}/>  
<Button active={selected==='What others say'} alignSelf='stretch' color={selected==='What others say'?'accent-1':'brand'} label="WHAT OTHERS SAY" onClick={()=>setSelected('What others say')}/>   
<Button active={selected==='In the media'} alignSelf='stretch' color={selected==='In the media'?'accent-1':'brand'} label="In the media" onClick={()=>setSelected('In the media')}/>  
</Box> 
      }

      {selected==='Who we are'&&size==='small'&&
<WhoweareMobile backToMenu={()=>setSelected('')}/> 
      }
     
     {size!=='small'&& <Box gridArea="main" background="transparent">
     {selected==='Who we are'&&<WhoweareDesktop {...{showSidebar}}/>}
     
     {selected==='Who we serve'&&
     <Box round elevation='small' fill='vertical' width='large' alignSelf='center' background={{"color":'brand',"opacity":'0.3'}} pad='medium'>
     <Whoweserve/>
     </Box>
     }
     {selected==='What others say'&&
     <Box round elevation='small' fill='vertical' width='large' alignSelf='center' background={{"color":'brand',"opacity":'0.3'}} pad='medium'>
     <Whatotherssay/>
     </Box>
     }
     {selected==='In the media'&&
     <Box round elevation='small' fill='vertical' width='large' alignSelf='center' background={{"color":'brand',"opacity":'0.3'}} pad='medium'>
     <Inthemedia/>
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
 <WhoweareBox
 {...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/student1.jpg" />
  <Image fit="cover" src="static/imgs/student2.jpg" />
</Carousel>
</Box>
 }
socialproof='We support over 9400 Students'
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
<WhoweareBox
{...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/guardian1.jpg" />
  <Image fit="cover" src="static/imgs/guardian2.jpg" />
</Carousel>
</Box>
 }
 socialproof='Over 900 Guardians have benefited'
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
<WhoweareBox
{...{activetab}}
 media={
  <Box height="small" width="large" overflow="hidden" alignContent='center'>
<Carousel fill play={8000}>
  <Image fit="cover" src="static/imgs/financialeducator1.png" />
  <Image fit="cover" src="static/imgs/financialeducator2.jpg" />
</Carousel>
</Box>
 }
 socialproof='238 Financial Educators onboard'
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
  
  const WhoweareBox = ({media,socialproof,description,activetab}) => (
    <Box direction='row' fill >
        
    <Box align='start' margin={{top:'large'}}  gap='small' justify='start'>
    <Heading textAlign='center' level='4' margin='none' color='brand-mobi'>{socialproof}</Heading>
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

  const Whatotherssay= () => {
    const [activetab,setActivetab]=React.useState('students')

    const readArray = (array, index = 0) => {
      
  
          setTimeout(() => {
           
              const i= index < (array.length-1)? index+1:0
              readArray(array, i);
           
          }, 7000);
         return(array[index]);
  };

  readArray( ['Student one says','Student two says',])
    
    return (
       
      <Tabs flex={false} background='brand-mobi'>
      <Tab 
      title={<RichTabTitle icon={<Group/>} label='Students'/>}
      onActive={()=>setActivetab('students')}
      >
     <WhatotherssayBox
     {...{activetab}}
     media={
      <Box height="small" width="large" overflow="hidden" alignContent='center'>
    <Carousel fill play={8000}>
      <Image fit="cover" src="static/imgs/montana.png" />
    </Carousel>
    </Box>
     }
    caption='Montana Kyle speaks wonders'
     description="Montana kyle says Joining takesavillage was the best decision she has ever made. At the point when 
     Montana kyle says Joining takesavillage was the best decision she has ever made. At the point when
     Montana kyle says Joining takesavillage was the best decision she has ever made. At the point when
     Montana kyle says Joining takesavillage was the best decision she has ever made. At the point when
          "
     />
      </Tab>
      <Tab 
      title={<RichTabTitle icon={<UserManager/>} label='Guardians'/>}
      onActive={()=>setActivetab('guardians')}
      >
    <WhatotherssayBox
    {...{activetab}}
     media={
      <Box height="small" width="large" overflow="hidden" alignContent='center'>
    <Carousel fill play={8000}>
      <Image fit="cover" src="static/imgs/bruce.png" />
    </Carousel>
    </Box>
     }
     caption="Bruce attributes Ann`s academic success  to us"
     description="She was just 14 when I openned this campaign for her. I knew she wanted to be a cardiologist but we did not have such money
     She was just 14 when I openned this campaign for her. I knew she wanted to be a cardiologist but we did not have such money
     She was just 14 when I openned this campaign for her. I knew she wanted to be a cardiologist but we did not have such money
     She was just 14 when I openned this campaign for her. I knew she wanted to be a cardiologist but we did not have such money
          "
     />
      </Tab>
      <Tab 
        title={<RichTabTitle icon={<UserExpert/>} label='Financial Educators'/>}
        onActive={()=>setActivetab('financialeducators')}
      >
    <WhatotherssayBox
    {...{activetab}}
     media={
      <Box height="small" width="large" overflow="hidden" alignContent='center'>
    <Carousel fill play={8000}>
      <Image fit="cover" src="static/imgs/liz.jpg" />
    </Carousel>
    </Box>
     }
     caption='Liz knows no better platform for education crowdfunding than takesavillage'
     description="Elizabeth Fiattarone is my name, I have been a financial educator for a decade, but honestly speaking, I have not found
     Elizabeth Fiattarone is my name, I have been a financial educator for a decade, but honestly speaking, I have not found
     Elizabeth Fiattarone is my name, I have been a financial educator for a decade, but honestly speaking, I have not found
     "
     />
      </Tab>
    </Tabs>
      
    );
    
      
    }
    
  const WhatotherssayBox = ({media,caption,description,activetab}) => (
    <Box direction='row' fill >
        
    <Box align='start' margin={{top:'large'}}  gap='small' justify='start'>
    
   {media}
   <Heading textAlign='center' level='6' margin='none' color='brand-mobi'>{caption}</Heading>
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

   const InthemediaBox = ({media,headline,activetab,description}) => (
    <Box direction='row' fill >
        
    <Box align='start' margin={{top:'large'}}  gap='small' justify='start'>
    
   {media}
    </Box>
  
  <Box pad='medium' justify='center' fill='horizontal'>
            <Box fill>
            <Heading textAlign='center' level='4' margin='none' color='brand-mobi'>{headline}</Heading>
          
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
            
            <Button reverse  href={activetab} label="SEE MORE" plain icon={<LinkNext />} color='accent-1'  hoverIndicator={false} disabled={false} />
            
            
  </Box>
          </Box>
</Box>
  );

  const MediaTab = ({image,})=><Box direction="row" align="center" gap="xsmall" margin="xsmall">
 <Image src={image} round/>
 
</Box>

  const Inthemedia= () => {
    const [activetab,setActivetab]=React.useState('https://www.king5.com/article/news/local/bellevue-mom-creates-college-crowd-funding-site/238763111')
    
    return (
       
      <Tabs flex={false} background='brand-mobi'>
      <Tab 
      title={<MediaTab image="static/imgs/king.png" />}
      onActive={()=>setActivetab('https://www.king5.com/article/news/local/bellevue-mom-creates-college-crowd-funding-site/238763111')}
      >
     <InthemediaBox
     {...{activetab}}
     media={
      <Carousel fill play={8000}>
      <Image fit="cover" src="static/imgs/kingnews.png" />
    </Carousel>
     }
    headline='Bellevue mom creates college crowd-funding site'
    description="
    BELLEVUE, Wash. -- Just as students are preparing to pay for their first semester of college, 
    a woman from Bellevue has created a website that works to make things a bit easier. She is taking 
    on a new approach to crowd-funding to give students another option to help offset their pricey investment.
    "
     />
      </Tab>
      
    </Tabs>
      
    );
    
      
    }