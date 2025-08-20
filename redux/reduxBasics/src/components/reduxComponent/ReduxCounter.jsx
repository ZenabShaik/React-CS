import React, { use } from 'react';
import { useSelector,useDispatch } from "react-redux";
import counterSlice from "../../redux/counterSlice";

const actions = counterSlice.actions;

function ReduxCounter() {

    const count=useSelector((store)=>store.counterState.count);
    const dispatch = useDispatch();
  // Event handler to increment count
  const handleIncrement = () => {
    dispatch(actions.increment());
  };

  // Event handler to decrement count
  const handleDecrement = () => {
    dispatch(actions.decrement());
  };

  // Event handler to reset count
  const handleReset = () => {
    dispatch(actions.reset());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

export default ReduxCounter;
