import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal.jsx'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className='checkout-ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>

        <div>
            <h2 className="checkout-title">
                Your Shopping Basket
            </h2>

            {basket.length === 0 ? (
                <div className='empty-cart-div'>
                    <img className="empty-basket-img" src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'></img>
                    <div className='empty-basket-nav-div'>
                      <p className="empty-basket-text">Your Cart is empty</p>
                      <Link to="/">
                        <button className='add-item-btn'>Add item</button>
                      </Link>
                    </div>                
                </div>
            ) : (
                basket.map(item => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                ))
            )}
        </div>
        
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
