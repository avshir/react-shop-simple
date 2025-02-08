import { IGood } from "../services/models";
import GoodItem from "./GoodItem";

interface GoodsListProp {
  goods: IGood[];
}
const GoodsList = ({ goods }: GoodsListProp) => {
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
