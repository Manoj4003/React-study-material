import React, { useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  function reset()
{
    setCount(0);
}
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
