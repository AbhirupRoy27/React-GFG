import './App.css'
import Grid from './Compo/Grid'
import CounterUseState from './Compo/Counter/Counter'
import { Link, Routes, Route, Outlet } from 'react-router-dom'
import Form from './Compo/GPTForm/NameForm'
import Home from './Home'
import { lazy, Suspense } from 'react'

const Timer = lazy(() => import('./Timer/index'))

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
      <div className="">
        <div className="flex bg-red-200 p-[1%] items-center justify-end pr-10 font-bold">
          <Link to="/">HOME</Link>
        </div>
        <Grid />

        <Layout />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<CounterUseState />} />
            <Route path="form" element={<Form />} />
            <Route
              path="timer"
              element={
                <Suspense fallback={<p>Loading....</p>}>
                  <Timer />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
