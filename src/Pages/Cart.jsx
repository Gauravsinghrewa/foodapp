import React, { useContext } from 'react'
import "../Style/Cart.css"
import Layout from '../component/header/Layout'
import StoreContext from '../contast/StoreContext'


const Cart = () => {

    const [cardItems,food_list, removeFromCart]= useContext(StoreContext);
  return (
   <Layout >
    <div className='cart'>
       <div className='cart-item'>
            <div className='cart-item-title'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
                if(cardItems[item._id]>0)
                {
                  return(
                    <div className='card-items-title card-items-item'>
                               <img src={item.image} alt=' '/>
                               <p>{item.name}</p>
                               <p>{item.price}</p>
                               <p>{cardItems[item._id]}</p>
                               <p>{item.price*cardItems[item._id]}</p>
                               <p>X</p>

                    </div>
                  )
                }
            })}
       </div>
    </div>
    </Layout>  
  )
}

export default Cart
