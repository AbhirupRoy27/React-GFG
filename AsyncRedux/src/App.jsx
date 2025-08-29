import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import NewCount from './Component/NewCount'

function App() {
  return (
    <>
      <div className="overflow-scroll">
        <Navbar />
        <NewCount />
      </div>
    </>
  )
}

export default App
