import { useEffect, useState } from 'react';

export default function ExampleExtraStateVariable() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [positiveValues, setPositiveValues] = useState([]);

  useEffect(() => {
    if (count1 > 0 && count2 > 0) {
      setPositiveValues([count1, count2]);
    } else if (count1 > 0 && count2 <= 0) {
      setPositiveValues([count1]);
    } else if (count1 <= 0 && count2 > 0) {
      setPositiveValues([count2]);
    } else {
      setPositiveValues([]);
    }
  }, [count1, count2]);

  return (
    <div>
      <div>Count 1: {count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>

      <div>Count 2: {count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
      {/* use join to display the array as a string with commas in between */}
      <div>Positive Values: {positiveValues.join(', ')}</div>
    </div>
  );
}
