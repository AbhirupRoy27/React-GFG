import { useState } from 'react'
import { CounterContext } from './Context'

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState(0)
  return (
    <CounterContext.Provider value={{ name, setName }}>
      {children}
    </CounterContext.Provider>
  )
}
