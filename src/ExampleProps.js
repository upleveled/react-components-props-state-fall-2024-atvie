export default function ExampleProps(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Street: {props.address.street}</p>
      <p>Zip Code: {props.address.zipCode}</p>
    </div>
  );
}
