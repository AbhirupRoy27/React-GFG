import './App.css'
import Grid from './Compo/Grid'
import CounterUseState from './Compo/Counter/Counter'
import { Link, Routes, Route } from 'react-router-dom'
import Form from './Compo/GPTForm/NameForm'
import Home from './Home'

function App() {
  return (
    <div className="container ">
      <div id="navBar" className="border h-10 "></div>
      <Link to="/">GO BACK</Link>
      <Grid />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<CounterUseState />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
