function ArrayOfObj() {
  const Names = ['alice', 'bob', '', 'Rohit'];
  const listStyle = {
    listStyle: 'none',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: 5
  };

  return (
    <>
      <ul>
        {Names.map((names, index)=> (
          <li style={listStyle} key={index}>{names}</li>
        ))}
      </ul>
    </>
  )
}

export default ArrayOfObj;