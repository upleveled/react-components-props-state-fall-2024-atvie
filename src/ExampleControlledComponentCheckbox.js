import { useState } from 'react';

export default function ExampleControlledComponentCheckbox() {
  // 1. Create state variable
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>Cookie Policy Accepted</h2>
      <div>{JSON.stringify(isCookieAccepted)}</div>
      <input
        type="checkbox"
        // 2. Connect the state variable to the form fields
        checked={isCookieAccepted}
        // 3. Update the values of the state variables based on user input
        onChange={(event) => {
          setIsCookieAccepted(event.currentTarget.checked);
        }}
      />
    </form>
  );
}
