import products from '../database/data.json'
import ItemCard from './ItemCard'
import Navbar from './Navbar'
import CartView from './CartView'
import { useState } from 'react'

export default function Products() {
  const [cartView, setCartView] = useState(true)
  return (
    <div>
      <Navbar cartView={cartView} setCartView={setCartView} />
      {cartView ? <Shop /> : <CartView cartView />}
    </div>
  )
}

function Shop() {
  return (
    products.length > 0 &&
    products.map((p) => (
      <ItemCard key={p.id} title={p.title} name={p.name} price={p.price} />
    ))
  )
}
