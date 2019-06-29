import React from "react";

import {
  Box,
  Button,
 Paragraph,
  Text,
  Image,
Heading,ResponsiveContext
} from "grommet";
import {View,Money,FormClose} from 'grommet-icons'
import data from 'api/data'
import capitalize from 'capitalize'
import { ImageStamp, Card } from 'grommet-controls';
import Rating from 'components/atoms/Rating'
import Score from 'components/atoms/Score'
import config from 'config'

const {folks}=data


export default ({id,onClose}) => {
const [cover,setCover]=React.useState('https://i.ytimg.com/vi/6pJP2NJbJ1I/maxresdefault.jpg')
const [image,setImage]=React.useState('https://avatars0.githubusercontent.com/u/1753301?s=460&v=4\n')
const [name,setName]=React.useState('')
const [description,setDescription]=React.useState('')
const [category,setCategory]=React.useState('')
const [amount,setAmount]=React.useState(0)
const [goal,setGoal]=React.useState(1000)

React.useEffect( () => {
 const obj= folks.filter((f)=>f.id===id)
 if(obj.length){
  setName(obj[0].name)
  setCategory(obj[0]. category)
  if(obj[0].imageUrl){
    setImage(obj[0].imageUrl)
  }
  if(obj[0].license){
    setDescription(obj[0].license.aboutFA)
    if(obj[0].license.cover){
      setCover(obj[0].license.cover)
    }
  }
  if(obj[0].story){
    setDescription(obj[0].story.story)
    if(obj[0].story.cover){
      setCover(obj[0].story.cover)
    }
    if(obj[0].story.goal){
      setGoal(obj[0].story.goal)
    }
    if(obj[0].story.amount){
      setAmount(obj[0].story.amount)
    }
  }
 }

// console.log(obj)

}, [id]);

const size = React.useContext(ResponsiveContext)

    return(
  <Card background='brand-mobi'>
    <Card.CardTitle pad='none' basis='small'>
  <Box style={{ position: 'relative' }} height='small' width='full'>
    {size!=='small'&&<Box size='xsmall' justify='end' direction='row' round='full' primary pad='xsmall' elevation='large' style={{zIndex:1}}>
    <Button onClick={onClose}  size='xsmall'  primary color='brand-mobi'  icon={<FormClose color='brand'/>}/>
    </Box>}
    <Box align="start" justify="start" pad="small" direction="row" alignSelf="start"  style={{zIndex:1}}>
    <Box direction='row' round='medium' primary pad='small' elevation='medium' background='brand'>
     {category==='financial educator'&&<Rating value={3}/>}
     {(category==='guardian'||category==='student')&&<Score amount={amount} goal={goal}/>}
    </Box> 
        </Box>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          fit='cover'
          src={cover}
        />
        <ImageStamp
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginTop: '-48px',
            marginLeft: '-48px',
            width: '96px',
            height: '96px',
            border: '3px solid white',
          }}
          src={image}
          round='full'
        />
      </Box>
    </Card.CardTitle>
    <Card.CardContent responsive={false} pad={{ top: 'large', bottom: 'medium' }}>
      <Box align='center' pad='medium' gap='medium'>
      <Box gap='xxsmall'>
      <Heading level="2" size="medium" margin="none" textAlign="center">
      {name}
          </Heading>
          <Text  margin="none" textAlign="center" size='large'>
            {capitalize(category)}
          </Text>
      </Box>
        
        <Paragraph textAlign='center' margin='none' size='small'>
        {config.truncateSentence(description,2)}
        </Paragraph>
      </Box>
      <Box direction='row'>
        <Box align='center' fill='horizontal'>
          {category==='financial educator'&&<Button  target='_blank' icon={<View color='plain' />} label='PROFILE' onClick={() => {}} />}
          {(category==='guardian'||category==='student')&&
          <Button primary   target='_blank' icon={<Money color='accent-1' />} label='DONATE' onClick={() => {}} />}
        </Box>
      </Box>
    </Card.CardContent>
  </Card>
    
    );
}

