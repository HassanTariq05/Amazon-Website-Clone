import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
function Order({ order }) {
  const total = order.data.basket?.reduce(
    (amount, item) => amount + item.price,
    0,
  );
  return (
    <div className="order">
      {" "}
      <div className="order-header">
        {" "}
        <div>
          {" "}
          <span className="order-label">ORDER PLACED</span>{" "}
          <p className="order-date">
            {" "}
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}{" "}
          </p>{" "}
        </div>{" "}
        <div className="order-total">
          {" "}
          <span className="order-label">TOTAL</span>{" "}
          <p>${total?.toFixed(2)}</p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="order-info">
        {" "}
        <div>
          {" "}
          <span className="order-label">ORDER ID</span> <p>{order.id}</p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="order-body">
        {" "}
        <h3>
          {" "}
          {order.data.basket?.length || 0}{" "}
          {order.data.basket?.length === 1 ? "item" : "items"}{" "}
        </h3>{" "}
        <div className="order-products">
          {" "}
          {order.data.basket?.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Order;
