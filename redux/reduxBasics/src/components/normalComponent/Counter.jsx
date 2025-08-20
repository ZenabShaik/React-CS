import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Single state variable

  // Event handler to increment count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Event handler to decrement count
  const handleDecrement = () => {
    if (count==0){
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  // Event handler to reset count
  const handleReset = () => {
    setCount(0);
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

export default Counter;
