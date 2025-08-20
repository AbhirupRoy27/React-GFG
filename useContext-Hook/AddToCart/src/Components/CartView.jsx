import products from '../database/data.json'
import ItemCard from './ItemCard'

export default function CartView({ cartView }) {
  let sort = products.filter((p) => p.price >= 600)
  return (
    <div>
      {sort.map((p) => (
        <ItemCard
          key={p.id}
          title={p.title}
          name={p.name}
          price={p.price}
          cartView={cartView}
        />
      ))}
    </div>
  )
}
