import { ICartItem } from "../services/models";
import BasketItem from "./BasketItem";

interface BasketListProps {
  order: ICartItem[] | [];
  handleBasketShow: () => void;
  removeFromBasket: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  incQuantity: (itemId: string) => void;
}

const BasketList = ({
  order,
  handleBasketShow,
  removeFromBasket,
  decQuantity,
  incQuantity,
}: BasketListProps) => {
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
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            item={item}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Сart is empty</li>
      )}
      <div className='basket-list_total indigo accent-2'>
        <li className=''>
          Total: {totalPrice} $
        </li>
        <button className='btn-small secondary-content waves-effect waves-light basket-buy'>
          Order
        </button>
      </div>
    </ul>
  );
};

export default BasketList;
