import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  // 1. create a state variable
  const [usernameInput, setUsernameInput] = useState('');
  const [username, setUsername] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setUsername(usernameInput);
      }}
    >
      <div>{username}</div>
      <label htmlFor="userNameInput">Username: </label>
      <input
        // 2. connect the state with the input field
        value={usernameInput}
        id="userNameInput"
        // 3. Update the state
        onChange={(event) => setUsernameInput(event.currentTarget.value)}
      />
      <button>Submit</button>
    </form>
  );
}
