import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal.jsx'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

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

            {basket.map(item => (
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                price = {item.price}
                rating = {item.rating}
                image = {item.image}
                />
            ))}
        </div>
        
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
