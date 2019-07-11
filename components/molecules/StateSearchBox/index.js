import React from "react";

import { Box, Button, CheckBox,  Select, Text } from "grommet";
import config from 'config'


const allstates = config.statessArray()

const SearchInputContext= React.createContext(false)

export default({selectedStates,setselectedStates})=> {
    const [states,setstates]=React.useState(allstates)
    const [searching,setSearching]=React.useState(false)
    const [query,setQuery]=React.useState('')
     const selectRef =  React.useRef(null);

     React.useEffect(() => {
      const abortController= new AbortController()
      setSearching(true);
                        setTimeout(() => {
                          setSearching(false)
                            setstates(allstates.filter(
                              s =>
                                s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
                            )
                          );
                        }, 100);
                        return  function cleanup(){
                          abortController.abort()
                        }
      },[query,setstates])

     const onRemoveSeason = option => {
       
        const nextselectedStates = [...selectedStates];
        nextselectedStates.splice(nextselectedStates.indexOf(allstates.indexOf(option)), 1);
        setselectedStates(nextselectedStates)
      };

      const renderButtonContent=(name)=><Box
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
      
    </Box>
    
      const renderstates = (name) => (
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
    {renderButtonContent(name)}
  </Button>
)

 

     
  // const clearstates = () => setselectedStates([]);

 const renderOption = ({ name }) => {
    
    return (
      <Box direction="row" align="center" pad="small" flex>
        <CheckBox
          tabIndex="-1"
          checked={selectedStates.some(
            partner => partner.name === name
          )}
          label={<Text size="small">{name}</Text>}
          onChange={() => {}}
        />
      </Box>
    );
  };


    return (
     
        <Box fill  justify="stretch" width="medium">
          <SearchInputContext.Provider value={{searching, selectedStates}}>
            <Select
           
              ref={selectRef}
              dropHeight='medium'
              closeOnChange={false}
              placeholder="Select for states"
              searchPlaceholder="Search for states"
              emptySearchMessage="No partners found"
              multiple
              plain
              value={
               <Box wrap direction="row" fill='horizontal'>
                { selectedStates.length>0?
                  selectedStates.map((option) =>renderstates(option.name)): undefined
                 // renderstates('')
                }
              </Box>
              }
              selected={selectedStates.map(option => 
                states.indexOf(option)
              )}
              options={states}
             
              onChange={({ option }) => {
                const newSelectedPartners = [...selectedStates];
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
                setselectedStates(newSelectedPartners.sort())
                setstates(allstates.sort((p1, p2) => {
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

