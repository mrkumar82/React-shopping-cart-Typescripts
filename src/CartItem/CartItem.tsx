import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";

import React from "react";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cartwrapper">
      <div className="cartItems">
        <h3>{item.title}</h3>
        <div className="information">
          <p>price : ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <p>{item.amount}</p>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <div className="imgwrapper">
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
};

export default CartItem;
