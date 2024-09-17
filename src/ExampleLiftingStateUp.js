import { useState } from 'react';

function LightBulb(props) {
  return <div>lightbulb is {props.isOn ? 'on' : 'off'}</div>;
}

function Switch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>Toggle</button>;
}

export default function ExampleLiftingStateUp() {
  // 1. use state in the parent component
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      {/* 2. use state as props in the child component */}
      <LightBulb isOn={isOn} />
      <Switch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}
