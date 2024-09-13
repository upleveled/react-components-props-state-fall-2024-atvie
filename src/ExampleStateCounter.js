import { useState } from 'react';

export default function ExampleStateCounter() {
  const [count, setCount] = useState(0); // New state variable "count"
  return (
    <div>
      {/* Use the state variable */}
      {count}
      {/* Update the state variable */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
