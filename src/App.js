import ExampleArraysOfObjects from './ExampleArraysOfObjects';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledComponentCheckbox from './ExampleControlledComponentCheckbox';
import ExampleDataFetching from './ExampleDataFetching';
import ExampleDataModeling from './ExampleDataModeling';
import ExampleDerivingState from './ExampleDerivingState';
import ExampleDestructuringProps from './ExampleDestructuringProps';
import ExampleExtraStateVariable from './ExampleExtraStateVariable';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDrilling from './ExamplePropDrilling';
import ExamplePropDrillingChildrenProps from './ExamplePropDrillingChildrenProps';
import ExampleProps from './ExampleProps';
import ExamplePropTypes from './ExamplePropTypes';
import ExampleReactAntiPatterns from './ExampleReactAntiPatterns';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateManagement from './ExampleStateManagement';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';
import ExampleUseEffect from './ExampleUseEffect';

export default function App() {
  return (
    <>
      <h1>Example: Data Fetching</h1>
      <ExampleDataFetching />
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
      <h1>Example: Children Props</h1>
      <ExampleChildrenProps />
      <h1>Example: Prop Types</h1>
      <ExamplePropTypes />
      <h1>Example: React Antipatterns</h1>
      <ExampleReactAntiPatterns />
      <h1>Example: Controlled Component Checkbox</h1>
      <ExampleControlledComponentCheckbox />
      <h1>Example: Arrays Of Objects</h1>
      <ExampleArraysOfObjects />
      <h1>Example: UseEffect</h1>
      <ExampleUseEffect />
      <h1>Example: Data Modeling</h1>
      <ExampleDataModeling />
      <h1>Example: Extra State Variable</h1>
      <ExampleExtraStateVariable />
      <h1>Example: Deriving State</h1>
      <ExampleDerivingState />
      <h1>Example: Prop Drilling</h1>
      <ExamplePropDrilling />
      <h1>Example: Children Prop</h1>
      <ExamplePropDrillingChildrenProps />
      <h1>Example: State Management</h1>
      <ExampleStateManagement />
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
