// function Tweet(props) {
//   return (
//     <div style={{ border: '2px solid black', margin: '8px', padding: '12px' }}>
//       <h2>Name: {props.user}</h2>
//       <div>message: {props.message}</div>
//       <div>Number of Likes: {props.likes}</div>
//     </div>
//   );
// }

function Tweet({ user, message, likes }) {
  return (
    <div style={{ border: '2px solid black', margin: '8px', padding: '12px' }}>
      <h2>Name: {user}</h2>
      <div>message: {message}</div>
      <div>Number of Likes: {likes}</div>
    </div>
  );
}

export default function ExampleDestructuringProps() {
  return (
    <div>
      <Tweet user="Victor" message="I like React" likes={12} />
      <Tweet user="Karl" message="Please use Slack" likes={112} />
    </div>
  );
}
