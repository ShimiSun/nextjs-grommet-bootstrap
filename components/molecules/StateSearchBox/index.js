import React from "react";

import { FormClose } from "grommet-icons";

import { Box, Button, CheckBox,  Select, Text } from "grommet";
import config from 'config'


const allContentPartners = config.statesAb

const SearchInputContext= React.createContext(false)

export default(props)=> {
    const [contentPartners,setContentPartners]=React.useState(allContentPartners)
    const [selectedContentPartners,setSelectedContentPartners]=React.useState([])
    const [searching,setSearching]=React.useState(false)
    const [query,setQuery]=React.useState('')
     const selectRef =  React.useRef(null);

React.useState(
  ()=>{
console.log(props)
  },[props]
)

     React.useEffect(() => {
      setSearching(true);
                        setTimeout(() => {
                          setSearching(false)
                            setContentPartners(allContentPartners.filter(
                              s =>
                                s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
                            )
                          );
                        }, 100);
      },[query])

     const onRemoveSeason = option => {
       
        const nextSelectedContentPartners = [...selectedContentPartners];
        nextSelectedContentPartners.splice(nextSelectedContentPartners.indexOf(allContentPartners.indexOf(option)), 1);
        setSelectedContentPartners(nextSelectedContentPartners)
      };
    
      const renderContentPartners = (name) => (
  <Button
    key={`season_tag_${name}`}
    href="#"
    onClick={event => {
      event.preventDefault();
      event.stopPropagation();
      onRemoveSeason(name);
    }}
    onFocus={event => event.stopPropagation()}
    
  >
    <Box
      align="center"
      direction="row"
      gap="xsmall"
      pad={{ vertical: "xsmall", horizontal: "small" }}
      margin="xsmall"
      background="brand"
      round="large"
    >
      <Text size="xsmall" color="white">
        {name}
      </Text>
      <Box background="white" round="full" margin={{ left: "xsmall" }}>
        <FormClose
          color="brand"
          size="small"
          style={{ width: "12px", height: "12px" }}
        />
      </Box>
    </Box>
  </Button>
)

 

     
  // const clearContentPartners = () => setSelectedContentPartners([]);

 const renderOption = ({ name }) => {
    
    return (
      <Box direction="row" align="center" pad="small" flex>
        <CheckBox
          tabIndex="-1"
          checked={selectedContentPartners.some(
            partner => partner.name === name
          )}
          label={<Text size="small">{name}</Text>}
          onChange={() => {}}
        />
      </Box>
    );
  };
 /*
  const renderContentPartners = () => {
    
    return (
      
      <Box
        direction="row"
        gap="xsmall"
        pad={{ left: "small", vertical: "small" }}
        align="center"
        flex={false}
        wrap
      >
        <Box
          background="brand"
          round="medium"
          align="center"
          justify="center"
          pad={{ horizontal: "xsmall" }}
          style={{ minWidth: "21px" }}
        >
          <Text size="small">{selectedContentPartners.length}</Text>
        </Box>
        <Box wrap>
          <Text size="small" truncate>
            {selectedContentPartners.map(({ name }) => name).join(", ")}
          </Text>
        </Box>
        <Button
          href="#"
          onFocus={event => event.stopPropagation()}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            clearContentPartners();
            selectRef.current.focus();
          }}
        >
          <Box background="brand" round="full">
            <FormClose style={{ width: "12px", height: "12px" }} />
          </Box>
        </Button>
      </Box>
    );
  };

*/

    return (
     
        <Box fill  justify="stretch" width="medium">
          <SearchInputContext.Provider value={{ searching }}>
            <Select
            {...props}
              ref={selectRef}
              dropHeight='medium'
              closeOnChange={false}
              placeholder="Select Content Partners"
              searchPlaceholder="Search Content Partners"
              emptySearchMessage="No partners found"
              multiple
              plain
              valueLabel={
               <Box wrap direction="row" fill='horizontal'>
                {
                  selectedContentPartners.map((option) =>renderContentPartners(option.name))
                }
              </Box>
              }
              selected={selectedContentPartners.map(option =>
                contentPartners.indexOf(option)
              )}
              options={contentPartners}
             
              onChange={({ option }) => {
                const newSelectedPartners = [...selectedContentPartners];
                const seasonIndex = newSelectedPartners
                  .map(({ name }) => name)
                  .indexOf(option.name);
                if (seasonIndex >= 0) {
                  newSelectedPartners.splice(seasonIndex, 1);
                } else {
                  newSelectedPartners.push(option);
                }
                const selectedPartnerNames = newSelectedPartners.map(
                  ({ name }) => name
                );
                setSelectedContentPartners(newSelectedPartners)
                setContentPartners(allContentPartners.sort((p1, p2) => {
                    const p1Exists = selectedPartnerNames.includes(p1.name);
                    const p2Exists = selectedPartnerNames.includes(p2.name);

                    if (!p1Exists && p2Exists) {
                      return 1;
                    }
                    if (p1Exists && !p2Exists) {
                      return -1;
                    }
                    if (p1.name.toLowerCase() < p2.name.toLowerCase()) {
                      return -1;
                    }
                    return 1;
                  }))
                
              }}

              
              onSearch={searchQuery=> setQuery(searchQuery)}
            >
              {renderOption}
            </Select>
          </SearchInputContext.Provider>
        </Box>
   
    );

}

