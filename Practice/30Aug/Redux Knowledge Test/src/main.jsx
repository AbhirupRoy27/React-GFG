import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Redux/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>  Disabled to see the correct logs of cleanup function
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
)
