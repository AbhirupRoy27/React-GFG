function CardOne({ children }) {
  return <div className="card">{children}</div>
}

export default function Card() {
  return (
    <div>
      <CardOne>
        <h2>Title : </h2>
        <p>This is flexible content inside the card.</p>
      </CardOne>

      <CardOne>
        <button>Click Me</button>
      </CardOne>
    </div>
  )
}
