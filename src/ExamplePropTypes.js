import PropTypes from 'prop-types';

function User(props) {
  return (
    <div
      style={{
        border: 'solid 2px #ff3367',
        borderRadius: '3px',
        padding: '1em',
        display: 'inline-block',
      }}
    >
      <div>Name: {props.name} </div>
      <div>Age: {props.age} </div>
      <div>
        Games: {props.games[0]} and {props.games[1]}
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function ExamplePropTypes() {
  return <User name="Lukas" age={35} games={['CS:GO', 'GTA']} />;
}
