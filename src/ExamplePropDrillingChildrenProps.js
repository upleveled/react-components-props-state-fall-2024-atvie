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
      {/* Display any children components passed to Header */}
      {props.children}
    </header>
  );
}

export default function ExamplePropDrillingChildrenProp() {
  const user = { name: 'Karl', type: 'human' };
  return (
    <div>
      <Header>
        {/* Pass the Nav component as a child to Header and pass the username to Nav */}
        <Nav user={user} />
      </Header>
      <h2>BlogPost</h2>
      <div>text</div>
    </div>
  );
}
