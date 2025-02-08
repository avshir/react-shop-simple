import { ICartItem, IGood } from "../services/models";
import GoodItem from "./GoodItem";

interface GoodsListProp {
  goods: IGood[];
  addToBasket: (item: ICartItem) => void;
}
const GoodsList = ({ goods, addToBasket }: GoodsListProp) => {
  if (!goods.length || !goods) return <h3>Nothing here</h3>;

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodItem key={item.mainId} good={item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodsList;
