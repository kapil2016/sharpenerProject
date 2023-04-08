import { legacy_createStore as createStore } from "redux";


const reducerCounter = (state={counter : 0} , action)=>{
    if(action.type ==='incr'){
        return {
            counter : state.counter + 2 
        }
    }else if (action.type === 'decr'){
        return {
            counter : state.counter -2
        }
    }
    return state ;
}

const store = createStore(reducerCounter);

export default store ;
