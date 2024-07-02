import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './subtotal.css';

function Subtotal() {
  const [{ basket }] = useStateValue();

  const totalPrice = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  }

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button className='subtotal-checkout-btn'>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
