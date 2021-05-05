import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal.js"
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="Checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">Your shoping Basket</h2>
                    {
                        (basket.map(item => (
                            <CheckoutProduct 
                            id ={item.id}
                            image ={item.image}
                            title= {item.title}
                            price ={item.price}
                            rating ={item.rating}
                            
                            /> )))
                    }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
