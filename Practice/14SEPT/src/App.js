import './App.css'
import TestCompo from './Compo/testCompo'
import MultiCheck from './Compo/MultiProps'
// import ArrayOfObj from './Compo/ArrayOfObj'
// import Cards from './Compo/CardWithChildren'
import Jobs from './JsonCompo/TestJson'

function App() {
  return (
    <div className="App">
      <TestCompo name="Abhirup" age={24} />
      <div className="cards">
        <MultiCheck
          name="Abhi"
          age="10"
          hobby="Drawing"
          userAge={20}
          userName="hello"
          id={false}
        />
        <MultiCheck
          name="--"
          age="20"
          hobby="Baking"
          userAge={50}
          userName="hi"
          id={true}
        />
      </div>
      <div className="lst-jobs">
        <Jobs />
      </div>
    </div>
  )
}

export default App
