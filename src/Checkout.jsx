import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.jsx'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className='checkout-ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>

        <div>
            <h2 className="checkout-title">
                Your Shopping Basket
            </h2>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
