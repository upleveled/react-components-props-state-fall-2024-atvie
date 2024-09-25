// document.title

import { useEffect, useState } from 'react';

export default function ExampleUseEffect() {
  const [name, setName] = useState('Antje');
  const [count, setCount] = useState(0);
  // 1. useEffect with no dependency array
  // the useEffect runs after initial render and after every re-render!!
  // useEffect(() => {
  //   console.log('rerender');
  //   document.title = 'Karl';
  // });
  // 2. useEffect with empty dependency array
  // the useEffect runs only after initial render!
  // useEffect(() => {
  //   document.title = `${name} clicked ${count}`;
  // }, []);
  // 3. useEffect with elements in dependency array
  // the useEffect runs only after initial render and when values in the dependency array changes
  useEffect(() => {
    document.title = `${name} clicked ${count}`;
  }, [name, count]);

  return (
    <>
      <button
        onClick={() => {
          setName('Karl');
          setCount(count + 1);
        }}
      >
        Set name to Karl
      </button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}
