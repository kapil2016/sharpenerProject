import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'
import { addNewOrder,removeOrder } from '../States/Reducers/cartItem-reducer';


const CartItem = (props) => {
  const { title, quantity, total, price ,id } = props.item;
  const dispatch = useDispatch();

 
 const addOrderHandler = ()=>{
    dispatch(addNewOrder({name:title , id : id , price:price }))
 }
 const removeOrderHandler=()=>{
    dispatch(removeOrder(id))
 }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeOrderHandler}>-</button>
          <button onClick={addOrderHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
