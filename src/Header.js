import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="logo" />
            </Link>
            

            <div className="header_search">
             <input className="header_search_input" type="text" />
             <SearchIcon className="header_search_icon" />

            </div>
           <div className="header_nav">
               <div className="header_option">
                <span className='line1'>Hello</span>
                <span className='line2'>Sign in</span>
               </div>
               <div className="header_option">
               <span className='line1'>Returns</span>
                <span className='line2'>Orders</span> 
               </div>
               <div className="header_option">
               <span className='line1'>Your</span>
                <span className='line2'>Prime</span> 
               </div>
               <Link to="/checkout">
               <div className="header_option_busket">
               <ShoppingBasketIcon />
    <span className='line2 header_basket_count'>{basket?.length}</span>    
               </div>
               </Link>
               
           </div>
           
        </div>
    )
}

export default Header
