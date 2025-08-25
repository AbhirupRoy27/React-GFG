import { useState } from 'react'
import { CountContext } from './ContextCreate'

export const ContextProvider = ({ children }) => {
  const [number, setNumber] = useState(0)

  return (
    <CountContext.Provider value={{ number, setNumber }}>
      {children}
    </CountContext.Provider>
  )
}
