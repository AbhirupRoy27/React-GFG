function FeedbackCard({ p }) {
  return (
    <div className="bg-gradient-to-r from-amber-300 to-amber-200 p-2 rounded-sm shadow-xl mb-2 hover:scale-102 ">
      <p className="text-xl mb-2 font-semibold ml-2 font-mono">
        {p.name}'s Feedbacks
      </p>
      <p className="text-[18px] bg-gradient-to-r from-amber-300 to-amber-200 p-2 mb-2 rounded font-serif">
        <b>Feedback Description:</b> {p.feedback}
      </p>
      {p.name !== 'Loading' && (
        <div className="flex justify-end ">
          <button
            className="bg-red-900/90 text-white p-2 rounded active:shadow-lg active:scale-102"
            onClick={() => alert('deleted')}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}

export default FeedbackCard
