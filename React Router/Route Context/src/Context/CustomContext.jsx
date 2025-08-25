import { useContext } from 'react'
import { CountContext } from './ContextCreate'

export const useCounter = () => {
  return useContext(CountContext)
}
