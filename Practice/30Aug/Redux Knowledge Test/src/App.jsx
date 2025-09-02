import './App.css'
import { useSelector } from 'react-redux'
import OrderButtons from './Componets/OrderButtons'
import ItemCounter from './Componets/ItemCounter'

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <h1>Hello Ji!</h1>
      <div className="product-card">
        <div className="photo"></div>

        <ItemCounter count={count} />

        {count > 0 && <OrderButtons />}
      </div>
    </>
  )
}

export default App
