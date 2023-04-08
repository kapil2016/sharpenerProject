import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter)  ;
  const dispatch = useDispatch();
  const incrementValue = ()=>{
      dispatch({type:'incr'})
  }
  const decrementValue = ()=>{
      dispatch({type:'decr'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementValue}>incremnetBy2</button>
      <button onClick={decrementValue}>decrementBy2</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
