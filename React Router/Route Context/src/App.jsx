import './App.css'
import { useCounter } from './Context/CustomContext'

function App() {
  const { number, setNumber } = useCounter()

  const handleClickAdd = () => {
    setNumber(number + 1)
  }

  const handleClickSub = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <div className="button-container">
        <button onClick={handleClickAdd} className="button">
          Increase
        </button>
        <button
          onClick={handleClickSub}
          className={number >= 0 ? 'button' : 'button disable'}
        >
          Decrease
        </button>
      </div>
      <div className="number">
        {number >= 0 ? (
          <h1>{number}</h1>
        ) : (
          <p>
            <b style={{ color: 'red', marginRight: '10px' }}>(Warning!!)</b>No
            Value to Decrease
          </p>
        )}
      </div>
    </>
  )
}

export default App
