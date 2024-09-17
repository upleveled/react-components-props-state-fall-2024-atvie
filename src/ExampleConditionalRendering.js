import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <div>
      {/* Conditional Rendering with Ternary Operator */}
      <div>{isLoggedIn ? <p>Welcome</p> : <p>Please Log In</p>}</div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      <hr />
      <div>
        {/* Conditional Rendering with Boolean Operator */}
        {isButtonVisible && <div>Click me</div>}
        <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
          Toggle Button
        </button>
      </div>
    </div>
  );
}
