import React from "react";
import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className="items">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>{item.price}</h3>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </div>
  );
};

export default Item;
