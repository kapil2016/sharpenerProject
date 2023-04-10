import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart-reducer";

const store = configureStore({
    reducer:{
        cart : cartReducer 
    }
})

export default store ;