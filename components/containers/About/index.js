import React from "react";

import { Box,Grid,Button,ResponsiveContext} from "grommet";



export default ()=> {
    const size = React.useContext(ResponsiveContext)
    return (
      <Grid
      fill
      areas={size!=='small'?[
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]:[
        { name: "nav", start: [0, 0], end: [0, 0] },
      ]}
      columns={size!=='small'?["medium", "flex"]:["flex"]}
      rows={["flex"]}
      gap="medium"
      justifyContent='center'
    >
      
      <Box  gridArea="nav" wrap align="center" justify="center" pad="small"  margin ="small" direction="column" gap="medium">
      <React.Fragment>
      <Button alignSelf='stretch' margin='small'   color='accent-1' label="WHO WE ARE"/>
<Button alignSelf='stretch' margin='small'    color='brand' label="WHAT WE DO"/> 
<Button alignSelf='stretch' margin='small'   color='brand' label="WHO WE SERVE"/>  
<Button alignSelf='stretch' margin='small'    color='brand' label="WHAT OTHERS SAY"/>   
<Button alignSelf='stretch' margin='small'    color='brand' label="WHERE WE ARE GOING"/>  
      </React.Fragment>

</Box>
     
     {size!=='small'&& <Box gridArea="main" background="brand" />}
    </Grid>
    );
  
}



