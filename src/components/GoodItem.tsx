import { useContext } from "react";
import { IGood } from "../services/models";
import { ShopContext } from "../context";

interface GoodItemProp {
  good: IGood;
}

const GoodItem = ({ good }: GoodItemProp) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    good;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card' id={mainId}>
      <div className='card-image'>
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn indigo accent-2'
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              price,
              quantity: 1,
            })
          }
        >
          Buy
        </button>
        <span className='right price'>{price.regularPrice} $</span>
      </div>
    </div>
  );
};

export default GoodItem;
