import { createSlice } from "@reduxjs/toolkit";
const cartItemSlice = createSlice({
name:'cartItem',
initialState:{orderList:[]},
reducers:{
    addNewOrder:(state , action)=>{
        const orderItem = action.payload ;
        const item = state.orderList.find(item => item.id === orderItem.id);
        if(!item){
                state.orderList.push({
                    id:orderItem.id,
                    price:orderItem.price,
                    quantity:1,
                    name:orderItem.name,
                    totalAmount:orderItem.price,
                })
        }else{
            item.quantity++;
            item.totalAmount = item.price*item.quantity;
        }
    },
    removeOrder:(state,action)=>{
        const id = action.payload;
        const item = state.orderList.find(item=> item.id === id);
        if(item.quantity > 1){
            item.quantity-- ;
            item.totalAmount = item.price*item.quantity;
        }else{
            state.orderList = state.orderList.filter(item=>item.id !== id);
        }
    }
}
})
export const {addNewOrder , removeOrder} = cartItemSlice.actions;
const cartItemReducer = cartItemSlice.reducer;
export default cartItemReducer;