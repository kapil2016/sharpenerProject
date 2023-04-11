import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'ui',
    initialState:{notification:{visibility:false , status :'' , title :'' , message:''}},
    reducers:{
        setNotification: (state , action)=>{
            state.notification = action.payload ;
        }
    }
})
export const{setNotification} = uiSlice.actions; 
const uiReducer = uiSlice.reducer ;
export default uiReducer ;
