import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <>
      <h1>Example Components</h1>
      <ExampleComponents />
      <h1>Example Props</h1>
      <ExampleProps
        name="Lukas"
        age={37}
        address={{
          street: '123 Street',
          zipCode: 4567,
        }}
      />
      <ExampleProps
        name="Karl"
        age={19}
        address={{
          street: '456 Street',
          zipCode: 7890,
        }}
      />
      <h1>Example StateCounter</h1>
      <ExampleStateCounter />
      <h1>Example StateEmail</h1>
      <ExampleStateEmail />
    </>
  );
}
