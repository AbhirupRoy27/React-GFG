import { NameContext } from './Context'
import { useContext } from 'react'

export const useNames = () => {
  return useContext(NameContext)
}
