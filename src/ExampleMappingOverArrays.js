export default function ExampleMappingOverArrays() {
  // const teamMembers = ['Karl', 'Victor', 'Lukas'];
  // <div>Karl</div>
  // <div>Victor</div>
  // <div>Lukas</div>

  const teamMembers = [
    { id: 1, name: 'Karl' },
    { id: 2, name: 'Victor' },
    { id: 3, name: 'Lukas' },
    { id: 4, name: 'Karl' },
  ];

  return (
    <div>
      {teamMembers.map((teamMember) => {
        return (
          <div key={`teamMembers-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </div>
  );
}
