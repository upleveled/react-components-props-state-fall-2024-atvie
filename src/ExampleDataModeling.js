import { useState } from 'react';

const teamRoles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'no-rights',
};

const teamJobPosition = {
  developer: 'developer',
  ceo: 'CEO',
};

const initialTeamMembers = [
  {
    id: 1,
    name: 'Victor',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [
      { name: 'Wuff', type: 'cat' },
      {
        name: 'Miau',
        type: 'dog',
      },
    ],
  },
  {
    id: 2,
    name: 'Karl',
    jobPosition: teamJobPosition.ceo,
    role: teamRoles.noRights,
    pets: [],
  },
  {
    id: 3,
    name: 'Antje',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 4,
    name: 'Matthias',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 5,
    name: 'Lukas',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [],
  },
];

export default function ExampleDataModeling() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  return (
    <div>
      {teamMembers.map((teamMember) => {
        return (
          <div key={`teamMember-${teamMember.id}`}>
            <div>Name: {teamMember.name}</div>
            <div>Role: {teamMember.role}</div>
            <div>jobPosition: {teamMember.jobPosition}</div>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          const foundTeamMemberNamedKarl = teamMembers.find((teamMember) => {
            return teamMember.name === 'Karl';
          });
          // update team member directly
          foundTeamMemberNamedKarl.role = teamRoles.admin;
          // Update the team member role use spread operator to trigger a render in React
          setTeamMembers([...teamMembers]);
        }}
      >
        Change Karls Role to Admin
      </button>
      <button
        onClick={() => {
          // copy and update the current state using .map
          const newTeamMembers = teamMembers.map((teamMember) => {
            if (teamMember.name === 'Peter') {
              return {
                ...teamMember,
                role: teamRoles.admin,
                jobPosition: teamJobPosition.ceo,
              };
            }
            return teamMember;
          });
          setTeamMembers(newTeamMembers);
        }}
      >
        Change Victors Role to Admin
      </button>
    </div>
  );
}
