import React from "react";

import {
  Box,
  Button,
 Paragraph,
  Text,
Heading
} from "grommet";
import {ShareOption} from 'grommet-icons'
import data from 'api/data'
import capitalize from 'capitalize'

const {folks}=data


export default ({id}) => {

const [image,setImage]=React.useState('https://avatars0.githubusercontent.com/u/1753301?s=460&v=4\n')
const [name,setName]=React.useState('')
const [description,setDescription]=React.useState('')
const [category,setCategory]=React.useState('')

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
  }
  if(obj[0].story){
    setDescription(obj[0].story.story)
  }
 }
console.log(obj)
}, [id]);



    return(
      <Box align="center" pad="small" background={{"0":"b","1":"r","2":"a","3":"n","4":"d","color":"brand-mobi"}} round="medium" elevation="small" margin="medium" direction="column" width="medium" alignSelf="center" justify="center">
        <Box  align="end" justify="end" pad="small" direction="row" alignSelf="end">
          <Button label="" icon={<ShareOption />} primary color="brand" hoverIndicator={false} disabled={false} reverse={false} />
        </Box>
        <Box align="center" justify="center" pad="xsmall" margin="xsmall">
          <Box align="center" justify="center" pad="large" margin="medium" background={{"dark":false,"color":"light-2","image":`url(${image})`}} round="full" />
          <Heading level="2" size="medium" margin="xsmall" textAlign="center">
          {name}
          </Heading>
          <Text textAlign="center" size='large'>
           {capitalize(category)}
          </Text>
          <Paragraph size="small" margin="medium" textAlign="center">
          {description}
          </Paragraph>

          <Box align="center" justify="center" pad="medium" direction="row-responsive" flex alignSelf="center" width="medium" basis="xxsmall" gap="small" margin="xsmall">
           {(category==='student' || category==='guardian')&& <Button  label="DONATE" primary plain={false} />}
            <Button label="SEE PROFILE" />
            <Box align="center" justify="center" pad="small" />
          </Box>
        </Box>
      </Box>
    
    );
}

