import { createSlice } from "@reduxjs/toolkit";


const initialState = {counter: 0 , toggle : false};
const counterSlice = createSlice({
    name:'counter' ,
    initialState ,
    reducers:{
        incrementByone(state){
            state.counter++ ;
        } ,
        decrementByOne(state){
            state.counter--;
        },
        incrementByValue(state,action){
            state.counter=state.counter+action.payload ;
        },
        counterToggle(state){
            state.toggle = !state.toggle
        }
    }
})

export default counterSlice
