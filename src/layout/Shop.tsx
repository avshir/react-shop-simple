import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../services";

import { ShopContext } from "../context";

import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import { IGood } from "../services/models";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";

const Shop = () => {
  const { goods, loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  // const [goods, setGoods] = useState<IGood[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState<ICartItem[] | []>([]);
  // const [isBasketShow, setIsBasketShow] = useState(false);
  // const [alertName, setAlertName] = useState("");

  // const handleBasketShow = () => {
  //   setIsBasketShow(!isBasketShow);
  // };
  // const addToBasket = (item: ICartItem) => {
  //   const itemIndex = order.findIndex(
  //     (orderItem) => orderItem.mainId === item.mainId
  //   );

  //   if (itemIndex < 0) {
  //     const newItem = { ...item, quantity: 1 };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.displayName)
  // };

  // const removeFromBasket = (itemId: string) => {
  //   const newOrder = order.filter((orderItem) => orderItem.mainId !== itemId);
  //   setOrder(newOrder);
  // };

  // const incQuantity = (itemId: string) => {
  //   const newOrder = order.map((orderItem) => {
  //     if (orderItem.mainId === itemId) {
  //       return {
  //         ...orderItem,
  //         quantity: orderItem.quantity + 1,
  //       };
  //     } else {
  //       return orderItem;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const decQuantity = (itemId: string) => {
  //   const newOrder = order.map((orderItem) => {
  //     if (orderItem.mainId === itemId) {
  //       const newQuantity = orderItem.quantity - 1;
  //       return {
  //         ...orderItem,
  //         quantity: newQuantity > 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return orderItem;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const closeAlert= ()=> {
  //   setAlertName('');
  // }

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(API_URL, {
        headers: { Authorization: API_KEY },
      });
      const data = await res.json();

      // show only first 30 goods from 400
      const goods: IGood[] = data.shop.slice(0, 30);
      setGoods(goods);
      // setLoading(false);
    };
    fetchGoods();
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {isBasketShow && <BasketList />}
      {loading ? <Preloader /> : <GoodsList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
