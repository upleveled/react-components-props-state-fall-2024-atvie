import { useState } from 'react';

export default function ExampleStateEmail() {
  // 1. Create state for component
  const [email, setEmail] = useState('');

  let name = 'Karl';
  return (
    <>
      {/* 2. Display the current state */}
      <h2>{email}</h2>
      <input
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      {/* Example is not updating the name */}
      <h2>{name}</h2>
      <button
        onClick={() => {
          console.log('click');
          name = 'Antje';
        }}
      >
        Update name to Antje
      </button>
    </>
  );
}
