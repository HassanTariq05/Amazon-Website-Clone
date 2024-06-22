import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header-image-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
        </Link>
      
      <div className='header-search-bar'>
        <input type='text' className='header-search-input'></input>
        <SearchIcon 
        className='header-searchIcon'/>
      </div>

      <div className='header-nav'>
        <div className='header-option'>
            <span className='header-option-line-one'>Hello</span>
            <span className='header-option-line-two'>Sign In</span>
        </div>

        <div className='header-option'>
            <span className='header-option-line-one'>Returns</span>
            <span className='header-option-line-two'>& Orders</span>
        </div>

        <div className='header-option'>
            <span className='header-option-line-one'>Your</span>
            <span className='header-option-line-two'>Prime</span>
        </div>

        <Link to='/checkout'>
            <div className='header-option-basket'>
                <ShoppingBasketIcon />
                <span className='header-basket-count'>{basket?.length}</span>
            </div>
        </Link>
        

      </div>
    </div>
  )
}

export default Header
