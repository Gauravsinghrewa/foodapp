// import { Box } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../component/header/Layout'
import "../Style/Home.css";
import Explore from '../component/home/ExploreMenu/Explore'; 
import FoodDisplay from '../component/fooddisplay/FoodDisplay';


const Home = () => {
  const [category,setCategory]=useState('All')
  return (
    <>
    <Layout>
          <div className='home'>
           <div className='home-contents'>
              <h2>Order your favourite food here</h2>
              <p>Food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. An order is typically made either by telephone, through the supplier's website or mobile app, or through a third party food ordering service.</p>
              <button>View Menu</button>
           </div>
          </div>
          <div className='Explore-menus'>
          <Explore category={category} setCategory={setCategory}/>
          <FoodDisplay category={category}/>
          </div>
    </Layout>
    </>
  )
}

export default Home
