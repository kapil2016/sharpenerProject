import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { setNotification } from './components/States/Reducers/ui-reducer';
import { setCart } from './components/States/Reducers/cartItem-reducer';


async function updateCartData(cartData ,dispatch) {
  dispatch(setNotification({
    visibility:true ,
    title: 'sending...',
    status:'sending',
    message:'sending cart data'
  }))
  try {
    const response = await fetch('https://movie-store-20f0d-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify({items:cartData}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    console.log('Data was successfully sent to Firebase');
    dispatch(setNotification({
      visibility:true ,
      title: 'success',
      status:'success',
      message:'cart updated successfully'
    }))
  } catch (error) {
    console.error('There was a problem sending data to Firebase:', error);
    dispatch(setNotification({
      visibility:true ,
      title: 'some error accoured !',
      status:'error',
      message:'cart updated fails'
    }))
  }
}

async function getCartData(dispatch) {
  dispatch(setNotification({
    visibility:true ,
    title: 'calling',
    status:'sending',
    message:'calling cart data'
  }))

  try {
    const response = await fetch('https://movie-store-20f0d-default-rtdb.firebaseio.com/cart.json');
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    console.log(data);
    dispatch(setNotification({
      visibility:true ,
      title: 'success',
      status:'success',
      message:'Got cart successfully'
    }))
    dispatch(setCart(data.items));
  } catch (error) {
    console.error('There was a problem sending data to Firebase:', error);
    dispatch(setNotification({
      visibility:true ,
      title: 'some error accoured !',
      status:'error',
      message:'cart updated fails'
    }))
  }
}

let isInitial = true ;


function App() {
  const showCart = useSelector(state=>state.cart.cartVisibility)
  const orderList = useSelector(state=>state.cartItem.orderList);
  const notification= useSelector(state=>state.ui.notification);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isInitial){
      isInitial = false ;
      return;
    }
    updateCartData(orderList ,dispatch)
  },[orderList,dispatch ])

  useEffect(()=>{
    getCartData(dispatch)
  },[dispatch]);


  console.log(notification)
  return (
    <>
   {notification.visibility && <Notification title={notification.title} status={notification.status} message={notification.message} ></Notification>}
    <Layout>
      {showCart&&<Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
