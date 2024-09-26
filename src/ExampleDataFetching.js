import React, { useEffect, useState } from 'react';

export default function ExampleDataFetching() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // runs on initial render
  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://randomuser.me/api', {
        method: 'GET',
      });
      const data = await response.json();

      setUsers([data.results[0]]);
      setIsLoading(false);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      document.title = users[users.length - 1].name.first;
    }
  }, [users]); // triggers when users is updated and on initial render

  if (isLoading) {
    // early return
    return 'Loading...';
  }

  return (
    <div>
      {/* {/* You could use a Ternary, but an early return is more readable */}
      {/* {isLoading
        ? 'Loading'
        :  */}
      {users.map((user) => {
        return (
          <div key={`user-${user.uuid}`}>
            <img src={user.picture.medium} alt="user profile pic" width={100} />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city} {user.location.state}
            </div>
          </div>
        );
      })}
    </div>
  );
}
