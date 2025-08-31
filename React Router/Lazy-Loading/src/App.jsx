import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Lazily import our new homepage
const NewHomePage = lazy(() => import('./HomePage'))

function App() {
  const navigate = useNavigate()
  const [ishomepage, setIsHomePage] = useState(false)
  return (
    <>
      {/* Wrap your Routes component with Suspense */}
      <Suspense fallback={<div>Loading page, please wait...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                navigate={navigate}
                ishomepage={ishomepage}
                setIsHomePage={setIsHomePage}
              />
            }
          />
          {/* the route for our new lazy component */}
          <Route
            path="/home"
            element={
              <NewHomePage
                ishomepage={ishomepage}
                setIsHomePage={setIsHomePage}
                navigate={navigate}
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

const HomePage = ({ navigate, ishomepage, setIsHomePage }) => {
  return (
    <>
      <h1
        onClick={() => {
          navigate('home')
          setIsHomePage(!ishomepage)
        }}
        className={ishomepage ? 'pageone' : ''}
      >
        Click To: Go to Home Page
      </h1>
    </>
  )
}

const GoBack = () => {
  return <></>
}
