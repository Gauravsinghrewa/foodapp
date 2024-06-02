import React from 'react'
import Layout from '../component/header/Layout'
import Banner from '../component/Banner/Banner'
import { Box } from '@mui/material'
const Menu = () => {
 
  return (
    <Layout>
    <Box>
    <Banner/>
    </Box>

    <Box>
      <h1>All Food Menu</h1>
    </Box>

    
    </Layout>
  )
}

export default Menu
