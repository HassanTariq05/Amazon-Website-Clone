import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header-image-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
            </Link>

            <div className='header-search-bar'>
                <input type='text' className='header-search-input' />
                <SearchIcon className='header-searchIcon' />
            </div>

            <div className='header-nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header-option'>
                        <span className='header-option-line-one'>Hello, {user ? user.email : 'Guest'}</span>
                        <span className='header-option-line-two'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

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
    );
}

export default Header;
