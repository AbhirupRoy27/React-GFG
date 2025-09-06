import { useState } from 'react'
import { ItemContext } from './ItemContext'

const ItemProvider = ({ children }) => {
  const [brand, setBrand] = useState('')
  return (
    <ItemContext.Provider value={{ brand, setBrand }}>
      {children}
    </ItemContext.Provider>
  )
}

export default ItemProvider
