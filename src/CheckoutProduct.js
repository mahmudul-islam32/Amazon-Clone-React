import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =() =>{
             dispatch({
                 type: 'Remove_From_Basket',
                 id: id,
             })
    }
    return (
        <div className="checkoutProduct">
           <img className="product_img" src ={image} />
           
           <div className="product_info">
               <p className="product_title">{title}</p>
               <p className="product_price"><small>$</small><strong>{price}</strong></p>
               <div className="product_rating">
                   {
                       Array(rating).fill().map((_, i) => (<p>🌟</p>))
                   }
               </div>
               <button onClick={removeFromBasket}>Remove From Basket</button>
           </div>
            
        </div>
    )
}

export default CheckoutProduct
