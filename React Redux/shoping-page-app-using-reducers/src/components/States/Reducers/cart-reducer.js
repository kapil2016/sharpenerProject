import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{cartVisibility: false},
    reducers:{
        toggleCartVisibility: (state)=>{
            state.cartVisibility = !state.cartVisibility
        }
    }
})
export const{toggleCartVisibility} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer ;