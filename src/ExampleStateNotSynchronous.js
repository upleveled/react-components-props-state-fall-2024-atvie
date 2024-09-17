import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    // workaround
    const newValue = !isOn;
    console.log('new Value', newValue);
    console.log('before', isOn);
    setIsOn(!isOn);
    console.log('after', isOn);
  }

  // Workaround
  console.log('outside', isOn);

  return (
    <div>
      light bulb is {isOn ? 'on 🌝' : 'off 🌑'}
      <button onClick={() => toggleLight()}>toggle</button>
    </div>
  );
}
