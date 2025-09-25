import React, { useEffect } from 'react'
import FeedbackCard from './FeedbackCard'
import getFeedback from '../utills/getFeedback'

function AllFeedback({ dbData, setDBData }) {
  useEffect(() => getFeedback(setDBData), [setDBData])

  return (
    <div className="bg-yellow-800/60 p-2 sm:p-6 sm:min-w-[39.5%] flex flex-col gap-1 rounded-lg shadow-xl">
      <div className="bg-yellow-100/90 p-2 rounded-sm mb-1 shadow-lg ">
        <p className="text-3xl text-center font-bold text-yellow-900">
          All Feedback's
        </p>
      </div>

      {dbData?.length ? (
        dbData.map((feedback) => (
          <div key={feedback._id}>
            <FeedbackCard p={feedback} />
          </div>
        ))
      ) : (
        <FeedbackCard p={{ name: 'Loading User', feedback: 'Loading....' }} />
      )}
    </div>
  )
}

export default AllFeedback
