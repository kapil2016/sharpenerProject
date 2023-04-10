import { addNewOrder } from '../States/Reducers/cartItem-reducer';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch } from 'react-redux'


const ProductItem = (props) => {
  const { title, price, description,id } = props;
  // const orderList = useSelector(state=>state.cartItem.orderList)
  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
    dispatch(addNewOrder({name:title , price:price ,id:id}))
  }
// console.log(orderList)
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
