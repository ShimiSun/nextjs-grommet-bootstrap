import React from "react";


import { FormClose } from "grommet-icons";

import { Box, Button,  Select, Text } from "grommet";

import config from 'config'

const options = config.schoolsAb

const SchoolInputContext= React.createContext(false)

export default ({selectedSchool,setSelectedSchool})=> {

  const [schools,setschools]=React.useState(options)
    const [searching,setSearching]=React.useState(false)
    const [query,setQuery]=React.useState('')
     const selectRef =  React.useRef(null);
 
  React.useEffect(() => {
    setSearching(true);
                      setTimeout(() => {
                        setSearching(false)
                          setschools(options.filter(
                            s =>
                              s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
                          )
                        );
                      }, 100);
    },[query,setschools])

 
    const clearSchool =()=>setSelectedSchool('');

  const renderOption = ({ name }) => {
    
    return (
      <Box direction="row" align="stretch" pad="small" flex={false} overflow='hidden'>
        <Text size="small">{name}</Text>
      </Box>
    );
  };

  const renderschools = () => {
   
    return (
      <Box
        direction="row"
        gap="xsmall"
        pad={{ left: "small", vertical: "xsmall" }}
        align="stretch"
        flex
      >

        <Box flex>
          <Text size="small" truncate>
            {selectedSchool}
          </Text>
        </Box>
        <Button
          href="#"
          onFocus={event => event.stopPropagation()}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            clearSchool();
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

 

    return (
     
      <Box fill  justify="stretch" width="medium">
         <SchoolInputContext.Provider value={{searching, selectedSchool}}>
            <Select
              ref={selectRef}
              closeOnChange
              placeholder="Select State"
              searchPlaceholder="Search for State"
              emptySearchMessage="No State found"
              plain
              value={
                selectedSchool
                  ? renderschools()
                  : undefined
              }
              
              options={schools}
              onChange={({ option }) => {
                
                setSelectedSchool(option.name)
                setschools(options.sort((p1, p2) => {
                    const p1Exists = option===p1.name;
                    const p2Exists = option===p2.name;

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
          </SchoolInputContext.Provider>
         
        </Box>
     
    );
  
}
