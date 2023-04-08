
import { configureStore} from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import authSlice from "./AuthSlice";


// const initialState = {counter: 0 , toggle : false};
// export const counterSlice = createSlice({
//     name:'counter' ,
//     initialState ,
//     reducers:{
//         incrementByone(state){
//             state.counter++ ;
//         } ,
//         decrementByOne(state){
//             state.counter--;
//         },
//         incrementByValue(state,action){
//             state.counter=state.counter+action.payload ;
//         },
//         counterToggle(state){
//             state.toggle = !state.toggle
//         }
//     }
// })


const store = configureStore({
   reducer: {counter: counterSlice.reducer , auth: authSlice.reducer}
})
export default store ;
