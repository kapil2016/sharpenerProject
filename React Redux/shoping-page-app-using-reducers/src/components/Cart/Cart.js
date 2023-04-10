import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'


const Cart = () => {
  const orderList = useSelector(state=>state.cartItem.orderList)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       { orderList.map(item=>{
       return  <CartItem
       key = {item.id}
        item={{ title: item.name, quantity: item.quantity, total: item.totalAmount, price: item.price , id:item.id }}
      />
       })
        }
      </ul>
    </Card>
  );
};

export default Cart;
