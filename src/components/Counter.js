import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
