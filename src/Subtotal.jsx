import { Button } from '@mui/material';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css';
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
                value={totalPrice()} // Invoke totalPrice function to get the total price
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button className='subtotal-checkout-btn'>Proceed To Checkout</Button>
        </div>
    );
}

export default Subtotal;
