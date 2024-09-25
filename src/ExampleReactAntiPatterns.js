import { useState } from 'react';

// DONT DO THIS!
function Antipattern() {
  return (
    <div>
      <button
        id="my-button"
        onClick={() => {
          document.getElementById('my-button').textContent = 'Clicked!';
        }}
      >
        Click me!
      </button>
    </div>
  );
}

function WithoutAntipattern() {
  const [toggleText, setToggleText] = useState(false);

  return (
    <div>
      <button onClick={() => setToggleText(true)}>
        {toggleText ? 'Clicked!' : 'Click me!'}
      </button>
    </div>
  );
}

export default function ExampleReactAntiPatterns() {
  return (
    <>
      <Antipattern />
      <Antipattern />
      <hr />
      <WithoutAntipattern />
      <WithoutAntipattern />
    </>
  );
}
