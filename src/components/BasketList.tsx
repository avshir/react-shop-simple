import { useContext } from "react";
import { ShopContext } from "../context";

import BasketItem from "./BasketItem";

const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce(
    (sum, item) => sum + item.price.regularPrice * item.quantity,
    0
  );

  return (
    <ul className='collection basket-list'>
      <li className='collection-item indigo accent-2 active'>Basket</li>
      <i
        className='material-icons white-text basket-close'
        onClick={handleBasketShow}
      >
        close
      </i>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} item={item} />)
      ) : (
        <li className='collection-item'>Сart is empty</li>
      )}
      <div className='basket-list_total indigo accent-2'>
        <li className=''>Total: {totalPrice} $</li>
        <button className='btn-small secondary-content waves-effect waves-light basket-buy'>
          Order
        </button>
      </div>
    </ul>
  );
};

export default BasketList;
