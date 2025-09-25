function FeedbackCard({ p }) {
  return (
    <div className="bg-yellow-100 p-2 rounded-sm shadow-xl mb-1 hover:scale-102 ">
      <p className="text-xl mb-2">{p.name}'s Feedbacks</p>
      <p className="text-md bg-yellow-400/20 p-2 mb-2 rounded">
        <b>Feedback Description:</b> {p.feedback}
      </p>
      {p.name !== 'Loading' && (
        <div className="flex justify-end ">
          <button className="bg-red-900/90 text-white p-2 rounded active:shadow-lg active:scale-102">
            Remove
          </button>
        </div>
      )}
    </div>
  )
}

export default FeedbackCard
