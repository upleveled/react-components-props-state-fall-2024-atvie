import { useState } from 'react';

function calculatePositiveValues(count1, count2) {
  if (count1 > 0 && count2 > 0) {
    return [count1, count2];
  } else if (count1 > 0 && count2 <= 0) {
    return [count1];
  } else if (count1 <= 0 && count2 > 0) {
    return [count2];
  } else {
    return [];
  }
}

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <div>Count 1: {count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>

      <div>Count 2: {count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>

      <div>
        {/* use join to display the array as a string with commas in between */}
        Positive Values: {calculatePositiveValues(count1, count2).join(', ')}
      </div>
    </div>
  );
}
