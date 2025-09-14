import Jobs from './Jobs.json'
import './JsonStyle.css'
import Listings from './Listing'

function TestJson(props) {
  return (
    <>
      {Jobs.map((job) => (
        <div key={job.id} className="Job-Card">
          <Listings jobs={job} />
        </div>
      ))}
    </>
  )
}

export default TestJson
