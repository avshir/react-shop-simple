import { ICartItem, IGood } from "../services/models";

interface GoodItemProp {
  good: IGood;
  addToBasket: (item: ICartItem) => void;
}

const GoodItem = ({ good, addToBasket }: GoodItemProp) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    good;

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
