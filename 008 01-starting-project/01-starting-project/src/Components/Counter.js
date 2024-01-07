import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const IncrementHandler = () => {
    dispatch({type:'increment'})
  };
  const DecrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const IncrementBy5Handler = () => {
    dispatch({type:'INCREMENTBY5'})
  };
  const DecrementBy5Handler = () => {
    dispatch({type:'DECREMENTBY5'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decrement</button>
      </div>
      
      <button onClick={IncrementBy5Handler}>incrementBy5</button>
      <button onClick={DecrementBy5Handler}>decrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;