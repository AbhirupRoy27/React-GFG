import data from '../_db/Data.json'
import { useContext } from 'react'
import { ItemContext } from '../Context/ItemContext'

function ListItems() {
  const { brand } = useContext(ItemContext)

  let filteredBrends = data

  if (brand === 'All Options' || brand === '') {
    filteredBrends = data
  } else {
    filteredBrends = data.filter((p) => p.name === brand)
  }
  // console.log(data)
  return (
    <div>
      {filteredBrends.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  )
}

export default ListItems
