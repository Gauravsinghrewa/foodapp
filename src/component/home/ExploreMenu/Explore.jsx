import React from 'react'
import "../../../Style/Explore.css"
import { menu_list } from "../../../assets/assets";  


const Explore = ({category, setCategory}) => {



  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our menu</h1>
      <p className='explore-menu-text'>nline food ordering is the process of ordering food, for delivery or pickup, from a website or other application. The product can be either ready-to-eat food r food that has not been specially prepared for direct consumption.</p>
   
      <div className='explore-menu-lists'>
          {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item' >
                       <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='img1' />
                       <p>{item.menu_name}</p>
                       
                </div>
            )
          })}
      </div>
      <hr/>
    </div>
  )
}

export default Explore
