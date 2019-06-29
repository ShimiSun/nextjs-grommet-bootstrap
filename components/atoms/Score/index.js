import React from "react";

import { Text } from "grommet";

export default({ amount, goal,}) => {
 
  return (
    <React.Fragment>
       <Text size='large' color='accent-1'>{amount} </Text>{" "} <Text size='xsmall'> of {goal} collected</Text>
     </React.Fragment>
  );
};
