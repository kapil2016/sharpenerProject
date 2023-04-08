import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../store/CounterSlice';


const Counter = () => {

  const counter = useSelector(state => state.counter.counter)  ;
  const showCounter = useSelector(state => state.counter.toggle)  ;
  const dispatch = useDispatch();
  const incrementValue = ()=>{
      dispatch(counterSlice.actions.incrementByone())
  }
  const decrementValue = ()=>{
      dispatch(counterSlice.actions.decrementByOne())
  }

  const increseBy = ()=>{
    dispatch(counterSlice.actions.incrementByValue(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterSlice.actions.counterToggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementValue}>incremnetBy1</button>
      <button onClick={decrementValue}>decrementBy1</button>
      </div>
      <button onClick={increseBy}>decrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
