import { useContext } from "react";
import { ShopContext } from "../context";

import GoodItem from "./GoodItem";

const GoodsList = () => {
  const { goods } = useContext(ShopContext);

  if (!goods.length || !goods) return <h3>Nothing here</h3>;

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodItem key={item.mainId} good={item} />
      ))}
    </div>
  );
};

export default GoodsList;
