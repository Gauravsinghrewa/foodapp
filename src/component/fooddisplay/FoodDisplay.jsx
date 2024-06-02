import React, { useContext } from 'react'
import  { data } from '../../contast/StoreContext'
import "../../Style/Fooddisplay.css"
import Fooditem from '../fooditem/Fooditem'

const FoodDisplay = ({category}) => {  

  const food_list= useContext(data)
  return (
    <div className='food-display' id='food-display'>
      <h2> Top dished near you </h2>
      <div className='food-display-list'>
      {food_list.items?.map((item,index)=>{
         if(category==="All" || category ===item.category){
          return( 
            <Fooditem  key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            )
         }
        

      })}
      </div>
    </div>
  )
}

export default FoodDisplay
