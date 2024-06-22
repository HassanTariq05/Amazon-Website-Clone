import { Button } from '@mui/material';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import subtotal from './subtotal.css';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

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
            <button className='subtotal-checkout-btn'>Proceed To Checkout</button>
        </div>
    );
}

export default Subtotal;
