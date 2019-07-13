import React from 'react'
import {Box,Text} from 'grommet'
import { useRouter } from 'next/router'

export default ()=>{
  const router = useRouter()
const {query:{category,id}}=router

    return <Box align='center'>
      <Text>all  {category||""} {id||""} campaigns</Text>
    </Box>

}