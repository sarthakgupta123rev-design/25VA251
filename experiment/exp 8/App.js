import React, { useState } from "react";
import "./App.css";

function App() {

  // useState Hook
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (

    <div className="container">

      <h1>React Counter App</h1>

      <div className="counter-box">

        <h2>{count}</h2>

        <div className="buttons">

          <button onClick={increment}>
            Increment (+)
          </button>

          <button onClick={decrement}>
            Decrement (-)
          </button>

          <button onClick={reset}>
            Reset
          </button>

        </div>

      </div>

    </div>

  );
}

export default App;