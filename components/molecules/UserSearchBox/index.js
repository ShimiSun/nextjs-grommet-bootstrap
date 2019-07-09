import React from "react";

import { Search } from "grommet-icons";
import { Box, Image,  Text, TextInput,} from "grommet";
import data from 'api/data'

const {folks}=data

export default({getSelectedUserId})=>{
   // const [key,setKey]=React.useState(null)
    const [value,setValue]=React.useState('')
    const [suggestionOpen,setSuggestionOpen]=React.useState(false)
    const [suggestedFolks,setSuggestedFolks]=React.useState([])

  // state = { value: "", suggestionOpen: false, suggestedFolks: [] };

  const boxRef = React.useRef(null);

  /*
  React.useEffect( () => {if(!suggestionOpen){
    console.log(!key?'sidebar is open':'sidebarShdClose')
  }}, [key,suggestionOpen]);
  */

  const onChange = event =>{
    setValue(event.target.value )

      if (!event.target.value.trim()) {
        setSuggestedFolks([] );
      } else {
        // simulate an async call to the backend
        setTimeout(() => setSuggestedFolks(folks ), 300);
      }
    };

  const onSelect = event => {
   
    setValue(event.suggestion.value);
    getSelectedUserId(event.suggestion.key)
  }

  const renderSuggestions = () => {
    
    return suggestedFolks
      .filter(
        ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
      .map(({ id, category,name, imageUrl }, index, list) => ({
        label: (
          <Box
          flex
            direction="row"
            align="center"
            gap="small"
            border={index < list.length - 1 ? "bottom" : undefined}
            pad="small"
          >
            <Image
              width="48px"
              src={imageUrl}
              style={{ borderRadius: "100%" }}
            />
            
            <Text>
              <strong>{name}</strong>
            </Text>
           <Text size='xsmall' color='brand-mobi'>
             ({category})  
           </Text>
          </Box>
        ),
        value: name,
        key:id
      }));
  };


    return (

       
          <Box
            ref={boxRef}
            width="medium"
            
            direction="row"
            align="center"
            pad={{ horizontal: "small", vertical: "xxsmall" }}
            round="small"
            elevation={suggestionOpen ? "small" : undefined}
            border={{
              side: "all",
              color: suggestionOpen ? "accent-1" : "border"
            }}
            style={
              suggestionOpen
                ? {
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px"
                  }
                : undefined
            }
          >
            <Search color={!suggestionOpen ? "accent-1":"transparent"} />
            
            <TextInput
   // dropHeight='small'
            size='medium'
              type="search"
              dropTarget={boxRef.current}
              plain
              value={value}
              onChange={onChange}
              onSelect={onSelect}
              suggestions={renderSuggestions()}
              placeholder="Find out who is on takesavillage here"
              onSuggestionsOpen={() => setSuggestionOpen(true)}
              onSuggestionsClose={() =>setSuggestionOpen(false)}
            />
          </Box>
      
      
    );
  
}

