import { NameContext } from './Context'
import { useState } from 'react'

export const NameProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [gptName, setGptName] = useState('')
  return (
    <NameContext.Provider value={{ name, setName, gptName, setGptName }}>
      {children}
    </NameContext.Provider>
  )
}
