import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleDestructuringProps from './ExampleDestructuringProps';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';

export default function App() {
  return (
    <>
      <h1>Example: Components</h1>
      <ExampleComponents />
      <h1>Example: Props</h1>
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
      <h1>Example: State Counter</h1>
      <ExampleStateCounter />
      <h1>Example: State Email</h1>
      <ExampleStateEmail />
      <h1>Example: Mapping Over Arrays</h1>
      <ExampleMappingOverArrays />
      <h1>Example: Conditional Rendering</h1>
      <ExampleConditionalRendering />
      <h1>Example: Props Destructuring</h1>
      <ExampleDestructuringProps />
      <h1>Example: State not Synchronous</h1>
      <ExampleStateNotSynchronous />
      <h1>Example: Forms with Controlled Components</h1>
      <ExampleFormsWithControlledComponents />
      <h1>Example: Lifting State Up</h1>
      <ExampleLiftingStateUp />
      <h1>Example: Styling Options</h1>
      <ExampleStylingOptions />
      <h1>Example: Class To Function</h1>
      <ExampleClassToFunctionClass
        user={{
          details: 'details',
          name: 'Lukas',
          imageAlt: 'This is a meme with Buzzlightyear',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
