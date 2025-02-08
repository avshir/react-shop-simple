interface CartProp {
  quantity: number;
}

const Cart = ({ quantity }: CartProp) => {
  return (
    <div className='cart indigo accent-2 white-text'>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
