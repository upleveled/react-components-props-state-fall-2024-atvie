import React, { useState } from 'react';

const initialUser = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ian',
      last: 'Kuhn',
    },
    location: {
      city: 'Glasgow',
      state: 'Leicestershire',
      country: 'United Kingdom',
    },
    email: 'ian.kuhn@example.com',
    id: 1,
    picture: 'https://randomuser.me/api/portraits/med/men/47.jpg',
  },
];

export default function ExampleArraysOfObjects() {
  const [users, setUsers] = useState(initialUser);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`user-${user.id}`}>
            <img src={user.picture} alt="user profile pic" width={100} />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city} {user.location.state}
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          const newUserId = users[users.length - 1].id + 1;
          const newUser = {
            gender: 'female',
            name: {
              title: 'Miss',
              first: 'Deniz',
              last: 'Atakol',
            },
            location: {
              city: 'Glasgow',
              state: 'Leicestershire',
              country: 'United Kingdom',
            },
            email: 'ian.kuhn@example.com',
            id: newUserId,
            picture: 'https://randomuser.me/api/portraits/med/women/34.jpg',
          };
          // Don't do this!!
          // users.push(newUser);
          // console.log(users);
          // setUsers(users);

          // Do this!
          // 1. create a copy of the current state
          // const newUsers = [...users]; // use spread operator
          // 2. Update the copy of the old state
          // newUsers.push(newUser);
          // 3. set state to the copy of the old array
          // setUsers(newUsers);
          setUsers([...users, newUser]);
        }}
      >
        Add single User
      </button>
      <button
        onClick={() => {
          // 1. create a copy of the current state
          const newUsers = [...users]; // use spread operator
          // 2. update the copy created in step 1
          newUsers[0].name.first = 'Antje';
          // 3. set state to the copy of the old array
          setUsers(newUsers);
        }}
      >
        Set first user name to Antje
      </button>
      <button
        onClick={() => {
          // 1. create a copy of the current state
          const newUsers = [...users]; // use spread operator
          // 2. update the copy created in step 1
          newUsers.pop();
          // 3. set state to the copy of the old array
          setUsers(newUsers);
        }}
      >
        Delete the last user
      </button>
    </div>
  );
}
