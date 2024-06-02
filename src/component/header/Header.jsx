import React, { useState } from 'react';
import {AppBar,Toolbar, styled,Box, Button, IconButton, Drawer, Divider, Typography} from '@mui/material';
import {Menu } from '@mui/icons-material';
import {Search} from '@mui/icons-material';
import {LocalMall}from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';



import "../../Style/Header.css"

const StyleCompo= styled(AppBar)
`
background: orange;
height:48px;
`
const ImageLogo= styled('img')
` 
width:40px;
height:40px;
border-radius:50px;
margin-left:12rem;
`

const Component= styled(Box)
`
margin-left:15rem;
gap:30px;
display:flex;
`
const Signbtn= styled(Button)
`
height:30px;
width:100px;
border:2px solid  white;
border-radius:5px;
padding:10px;
`
const Header = ({setShowLogin}) => {

const [MobileOpen, setMobileOpen]= useState(false)

const hendleDrawerToggle= ()=>{
  setMobileOpen(!MobileOpen)
}

const drawer= (
  <Box onClick={hendleDrawerToggle} sx={{ textAlign:"center" }}>
  <Typography> Real Test</Typography>

  <Divider/>
   <ul className='Mobile-navigation'>
         <li>
             <Link to='/'>Home</Link>
         </li>
         <li>
         <Link to='/menu'>Menu</Link>
         </li>
         <li>
             <Link to='/Contact'>Contact</Link>
         </li> 
          <li>
             <Link to='/About'>About</Link>
          </li> 
   
       </ul>
  </Box>

)

  return (
    <Box>
   <StyleCompo >
         <Toolbar >

         <IconButton  color='inherit' edge="start" sx={{ mb:'15px', display:{ sm:"none" }}}
          onClick={hendleDrawerToggle}
         >
           <Menu/>
         </IconButton>

         <Box sx={{ mb:'10px'}}>
           <Link to="/"><ImageLogo src='https://img.freepik.com/premium-vector/logo-food-catering-that-is-called-food-catering_540027-2.jpg' alt='logofood'/></Link>
         </Box>
         <Box sx={{ ml:"50px" }} >
         <ul className='navigation-menu'>
         <li>
             <NavLink activeClassName='active' to='/'>Home</NavLink>
         </li>
         <li>
         <NavLink to='/menu'>Menu</NavLink>
         </li>
         <li>
             <NavLink to='/Contact'>Contact</NavLink>
         </li> 
          <li>
             <NavLink to='/About'>About</NavLink>
          </li>     
       </ul>
       </Box>

           <Component>
             <Search/>
             <Link to="/cart"><LocalMall/></Link> 
           <Signbtn   onClick={()=>setShowLogin(true)} sx={{ml:"30px", mb:'15px' }}>Sign in</Signbtn>
           </Component>
           {/* //drawer */}
           <Box component="nav">
                <Drawer varient="temporary" open={MobileOpen} onClose={hendleDrawerToggle} 
                sx={{display:{xs:'block', sm:"none"}, '& .MuiDrawer-paper':{ boxSizing:"border-box", width:"240px",}}} >
                    {drawer}
                </Drawer>
           </Box>
         </Toolbar>
         <Toolbar/>
    </StyleCompo>
    </Box>
    
  )
}

export default Header
