import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../services";

import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import { ICartItem, IGood } from "../services/models";
import BasketList from "../components/BasketList";

const Shop = () => {
  const [goods, setGoods] = useState<IGood[]>([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<ICartItem[] | []>([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  // console.log("goods >>", goods);
  console.log("order >>", order);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };
  const addToBasket = (item: ICartItem) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId: string) => {
    const newOrder = order.filter((orderItem) => orderItem.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId: string) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === itemId) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId: string) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === itemId) {
        const newQuantity = orderItem.quantity - 1;
        return {
          ...orderItem,
          quantity: newQuantity > 0 ? newQuantity : 0,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(API_URL, {
        headers: { Authorization: API_KEY },
      });
      const data = await res.json();
      // console.log("data >>", data);
      const goods: IGood[] = data.shop.slice(0, 30);
      setGoods(goods);
      setLoading(false);
    };
    fetchGoods();
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
        />
      )}
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
    </main>
  );
};

export default Shop;
