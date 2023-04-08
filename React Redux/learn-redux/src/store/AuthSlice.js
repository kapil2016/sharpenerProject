import {createSlice } from "@reduxjs/toolkit";

const initialState = {isAuthanticated:false}
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        isAuthanticated(state , action){
            state.isAuthanticated = action.payload ;
        }
    }

})

export default authSlice;
