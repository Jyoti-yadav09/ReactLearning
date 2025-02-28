import React from "react";
import useCounter from "./useCounter";
function App() {
   const[count, Increment, Decrement]=useCounter();

  return (
    <>
    <p>{count}</p>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App;
