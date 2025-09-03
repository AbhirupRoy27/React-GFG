import Buttons from './Buttons'

export default function ItemCard({ title, name, price, cartView }) {
  const StyleButtonDiv = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }

  const StyleCard = {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    padding: '10px',
    gap: '1rem',
    margin: '10px',
    borderRadius: '10px',
  }

  return (
    <div className="carditem" style={StyleCard}>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <div style={StyleButtonDiv}>{!cartView && <Buttons name={name} />}</div>
      <h2 style={{ fontFamily: 'sans-serif', fontWeight: 500 }}>
        Price: {price}/-
      </h2>
    </div>
  )
}
