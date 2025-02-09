interface CartProp {
  handleBasketShow: () => void;
  quantity: number;
}

const Cart = ({ handleBasketShow, quantity }: CartProp) => {
  return (
    <div className='cart indigo accent-2 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
