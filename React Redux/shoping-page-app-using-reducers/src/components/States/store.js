import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart-reducer";
import cartItemReducer from "./Reducers/cartItem-reducer";

const store = configureStore({
    reducer:{
        cart : cartReducer ,
        cartItem: cartItemReducer
    }
})

export default store ;