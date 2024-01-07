import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './Store/index';

const Counter = () => {
  
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const IncrementHandler = () => {
    dispatch(counterActions.IncrementHandler());
  };

  const DecrementHandler = () => {
    dispatch(counterActions.DecrementHandler());
  };

  const IncrementBy2Handler = () => {
    dispatch(counterActions.IncrementBy2Handler(2));
  };

  const DecrementBy2Handler = () => {
    dispatch(counterActions.DecrementBy2Handler(2))
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHandler())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>

      <button onClick={IncrementBy2Handler}>IncrementBy2</button>
      <button onClick={DecrementBy2Handler}>DecrementBy2</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
