import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import './payment.css';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import './checkoutProduct.css';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { db } from './firebase';
import { doc, setDoc } from "firebase/firestore";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const url = `http://127.0.0.1:5001/clone-467e9/us-central1/api/payments/create?total=${calculateTotalPrice(basket) * 100}`;
      console.log('Posting to URL:', url);
      const response = await axios({
        method: 'post',
        url: url,
      });
      setClientSecret(response.data.clientSecret);
    };

    if (basket.length > 0) {
      getClientSecret();
    }
  }, [basket]);

  console.log('The Secret is>>>: ', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  
    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
        return;
      }
  
      // Payment was successful, now save the order to Firestore
      const paymentIntent = payload.paymentIntent;
  
      await setDoc(doc(db, `users/${user?.uid}/orders/${paymentIntent.id}`), {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
  
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_BASKET',
      });
      navigate('/orders');
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const calculateTotalPrice = (basket) => {
    if (!Array.isArray(basket)) return 0;
    return basket.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='delivery-address'>
            <p>{user?.email}</p>
            <p>GT Road Pano Aqil</p>
            <p>Sindh, Pakistan</p>
          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review item and delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.length === 0 ? (
              <div className='empty-cart-div'>
                <img
                  className='empty-basket-img'
                  src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'
                  alt='Empty Basket'
                />
                <div className='empty-basket-nav-div'>
                  <p className='empty-basket-text'>Your Cart is empty</p>
                  <Link to='/'>
                    <button className='add-item-btn'>Add item</button>
                  </Link>
                </div>
              </div>
            ) : (
              basket.map((item) => (
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

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={calculateTotalPrice(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? 'Processing' : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div className='payment-error'>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
