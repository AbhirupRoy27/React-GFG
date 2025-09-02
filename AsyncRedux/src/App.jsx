import { Outlet, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import NewCount from './Component/NewCount'
import Contact from './Component/Extra/Contact'
import About from './Component/Extra/About'
import AsyncREDUX from './Component/Extra/AsyncREDUX'
import Page404Com from './Component/Page Not Found/Page404'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<NewCount />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Redux-async" element={<AsyncREDUX />} />
        <Route path="*" element={<Page404Com />} />
      </Routes>
    </>
  )
}

export default App
