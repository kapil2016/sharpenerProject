import classes from './CartButton.module.css';
import { useDispatch , useSelector } from 'react-redux';
import { toggleCartVisibility } from '../States/Reducers/cart-reducer';
function totalQuantity(list){
  let count = 0 ;
  list.forEach(item => {
    count +=item.quantity 
  });
  return count ;
}

const CartButton = (props) => {
  const dispatch = useDispatch();
  const orderList = useSelector(state=> state.cartItem.orderList);


  const cartButtonClickHandler = ()=>{
    dispatch(toggleCartVisibility());
  }
  const Quantity = totalQuantity(orderList);
  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default CartButton;
