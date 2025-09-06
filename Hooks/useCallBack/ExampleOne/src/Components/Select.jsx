import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../Context/ItemContext'

function SelectList() {
  const { setBrand } = useContext(ItemContext)
  const hadleChange = (e) => {
    setBrand(e.target.value)
    // console.log(e.target.value)
  }
  return (
    <>
      <select onChange={hadleChange}>
        <option>All Options</option>
        <option>Puma</option>
        <option>Nike</option>
        <option>Addidas</option>
        <option>Zudio</option>
      </select>
    </>
  )
}

export default SelectList
