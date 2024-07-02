import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("This is the basket:", basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product-container'>
            <div className="product-desc">
                <div className="product-name-desc-container">
                    <p className="product-name-desc">{title}</p>
                </div>
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
                <img className='product-img' src={image} alt={title} />
            </div>

            <div className="product-button-container">
                <button 
                    onClick={() => {
                        addToBasket();
                        toast.success("Item added to Basket");
                    }} 
                    className='product-buy-button'>
                    Add to Basket
                </button>
            </div>
        </div>
    );
}

export default Product;
