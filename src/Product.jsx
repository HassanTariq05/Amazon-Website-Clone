import React from 'react'
import product from './product.css'

function Product({title, price, rating, image}) {
  return (
    <div className='product-container'>
      <div className="product-desc">
        <div className="product-name-desc-container"><p className="product-name-desc">
        {title}
        </p></div>
        <p className="product-price-desc">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product-rating">
            {Array(rating).fill().map((_, i) => (
                <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <div className="product-img-container">
        <img className='product-img' src={image}></img>
      </div>

      <div className="product-button-container">
        <button className='product-buy-button'>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product
