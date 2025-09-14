import './App.css'
import Card from './Components/Card/Card'
import Home from './Home'
// import data from './_db/Data.json'
import Parent from './useCallbackComponents/Parent'

// DONT REMOVE THIS AT ANY POINT
function Important() {
  return (
    <></>
    /* <h2>-- Hello --</h2> 
      <Home /> 
      <div className="product-list">
        <Card />
      </div> */
  )
}

function App() {
  return (
    <>
      <Important />
      <Parent />
    </>
  )
}

export default App
