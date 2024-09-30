function Nav(props) {
  return (
    <>
      {/* display the username in the Nav component */}
      <button>Logout</button> {props.user.name}
    </>
  );
}

function Header(props) {
  return (
    <header>
      Logo UpLeveled
      {/* pass the username to the Nav component */}
      <Nav user={props.user} />
    </header>
  );
}

export default function ExamplePropDrilling() {
  const user = { name: 'Karl', type: 'human' };
  return (
    <div>
      {/* pass the username to the Header component */}
      <Header user={user} />
      <h2>BlogPost</h2>
      <div>text</div>
    </div>
  );
}
