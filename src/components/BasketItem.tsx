import { useContext } from "react";
import { ShopContext } from "../context";

import { ICartItem } from "../services/models";

interface BasketItemProps {
  item: ICartItem;
}

const BasketItem = ({ item }: BasketItemProps) => {
  const { mainId: id, displayName: name, price, quantity } = item;

  const { removeFromBasket, decQuantity, incQuantity } =
    useContext(ShopContext);

  return (
    <li id={id} className='collection-item'>
      {name} x{" "}
      <i
        className='material-icons green-text basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      {quantity}{" "}
      <i
        className='material-icons green-text basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price.regularPrice * quantity} $
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons indigo-text basket-delete'>close</i>
      </span>
    </li>
  );
};

export default BasketItem;
