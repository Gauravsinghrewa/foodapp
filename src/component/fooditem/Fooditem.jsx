import React, { useContext} from 'react'
import "../../Style/Foodlist.css"
import { assets } from '../../assets/assets'
import  { data } from '../../contast/StoreContext';
const Fooditem = ({id,name,price,description,image}) => {

//     const [itemcount, setItemCount]=useState(0);

    const {carditem, addtoCart, removeCart,}= useContext(data)
  return (
    <div className='food-item'>
         <div className='food-item-img-count'>
             <img className='item-img'  src={image} alt=''/>
             {!carditem[id]
                ?<img className="add" onClick={()=>addtoCart(id)}  src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                     <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt=''/>
                     <p>{carditem[id]}</p>
                     <img onClick={()=>addtoCart(id)}  src={assets.add_icon_green} alt=''/>
                </div>
             }
         </div>
         <div className='food-info'>
            <div className='food-rating'>
                 <p>{name}</p>
                 <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='food-desc'>{description}</p>
            <p className='food-item-price'> ₹{price}</p>
         </div>
    </div>
  )
}

export default Fooditem
