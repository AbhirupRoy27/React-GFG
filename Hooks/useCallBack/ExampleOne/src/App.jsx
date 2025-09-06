import './App.css'
import Card from './Components/Card/Card'
import Home from './Home'
// import data from './_db/Data.json'

function App() {
  return (
    <>
      <h2>-- Hello --</h2>
      {/* <Home /> */}
      <div className="product-list">
        {/* {data.map(() => (
          <Card />
        ))} */}
        <Card />
      </div>
    </>
  )
}

export default App
