import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets';

export const data=createContext();

const StoreContext = (props) => {
   
const [items, setItems]=useState(food_list)

const [carditem, setCardItem]= useState({})
const addtoCart=(itemId)=>{
  console.log(itemId)
  
  console.log(carditem)
  
 if(!carditem[itemId])
  {
    setCardItem((prev)=>({...prev,[itemId]:1}))
  }
  else
  {
    setCardItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
}

const removeCart=(itemId)=>{
    setCardItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}


useEffect(()=>{
  console.log(carditem);
},[carditem])
console.log(carditem);


const contextValue={
    items,
    setItems,
    carditem,
    setCardItem,
    addtoCart,
    removeCart,
  
}

  return (
    <data.Provider value={contextValue}>

        {props.children}
    </data.Provider>
  )
}

export default StoreContext;
