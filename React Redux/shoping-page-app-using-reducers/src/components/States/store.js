import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart-reducer";
import cartItemReducer from "./Reducers/cartItem-reducer";
import uiReducer from "./Reducers/ui-reducer";

const store = configureStore({
    reducer:{
        cart : cartReducer ,
        cartItem: cartItemReducer,
        ui:uiReducer
    }
})

export default store ;