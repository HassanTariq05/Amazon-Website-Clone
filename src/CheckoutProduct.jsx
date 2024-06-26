import React from 'react'
import './checkoutProduct.css'
import { Button } from '@mui/material'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct-image' src={image}/>

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
            {Array(rating).fill().map((_, i) => (
                <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className='remove-from-basket-button'>Remove from Basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct
