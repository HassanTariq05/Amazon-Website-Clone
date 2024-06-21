import { Button } from '@mui/material';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css';

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal-gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button className='subtotal-checkout-btn'>Proceed To Checkout</Button>
    </div>
  );
}

export default Subtotal;
