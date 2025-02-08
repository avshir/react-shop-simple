import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../services";

import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("goods >>", goods);

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(API_URL, {
        headers: { Authorization: API_KEY },
      });
      const data = await res.json();
      // console.log("data >>", data);
      setGoods(data.shop);
      setLoading(false);
    };
    fetchGoods();
  }, []);

  return (
    <main className='container content'>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};

export default Shop;
