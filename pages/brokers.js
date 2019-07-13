import React from 'react'
import {Box,Text} from 'grommet'
import { useRouter } from 'next/router'

export default ()=>{
  const router = useRouter()
const {query:{id}}=router


    return <Box align='center' alignContent='center'>
     <Text>
     {id? `fe:${id}`: 'all  fes'}
     </Text>
    </Box>

}