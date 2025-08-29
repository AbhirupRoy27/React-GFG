import { CounterContext } from './Context'
import { useContext } from 'react'

export default function useCounterContext() {
  return useContext(CounterContext)
}
