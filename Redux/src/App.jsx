import { Provider } from 'react-redux'
import Count from './Old/Count'
import storeold from './Old/Store'
import store from './NewC/newStore'
import NewCount from './NewC/new/NewCount'
// import ExampleTwo from './ExampleTwo'
// import Example from './Example'
// import AppTailwind from './TestTailwind'

function App() {
  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <Provider store={storeold}>
        <h1 className="font-semibold text-2xl">REDUX</h1>
        <Count />
        <hr />
        {/* <NewCount /> */}
      </Provider>
      <Provider store={store}>
        {/* <Count /> */}
        <NewCount />
      </Provider>

      {/* Copy COmponenets */}
      {/* <ExampleTwo /> */}
      {/* <Example /> */}

      {/* Test Tailwind
      <AppTailwind /> */}
    </div>
  )
}

export default App
