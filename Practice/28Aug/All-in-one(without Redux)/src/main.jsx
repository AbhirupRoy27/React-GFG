import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Compo/CounterContext/Context/ContextProvider.jsx'
import { NameProvider } from './Compo/ReContext/Context/ContextProvider.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <NameProvider>
          <App />
        </NameProvider>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
)
