import React from 'react'
import {Box,Text} from 'grommet'
import { useRouter } from 'next/router'
import ProfileLayout from 'components/Layouts/ProfileLayout';
// import NextSeo from 'next-seo';

export default ()=>{
  const router = useRouter()
const {query:{category,id}}=router

    return <ProfileLayout>
  <Box alignContent='center' pad='medium' fill background={{"image":"url('static/imgs/tav-heru-bkgd-mobi.png')","dark":true}}>
      <Text>all  {category||""} {id||""} campaigns</Text>
    </Box>
    </ProfileLayout>
    

}