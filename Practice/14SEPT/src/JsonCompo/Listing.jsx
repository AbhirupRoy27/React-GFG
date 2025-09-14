
const Listing = ({jobs}) => {
  return (
    <>
      <p>{jobs.type}</p>
      <h1>{jobs.name}</h1>
      <p>{jobs.details}</p>
      <button>{jobs.apply}</button>
    </>
  );
}

export default Listing;