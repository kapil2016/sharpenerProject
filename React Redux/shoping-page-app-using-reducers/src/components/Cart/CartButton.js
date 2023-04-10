import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../States/Reducers/cart-reducer';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartButtonClickHandler = ()=>{
    dispatch(toggleCartVisibility());
  }

  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
