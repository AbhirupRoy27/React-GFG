import React, { useEffect } from 'react'
import FeedbackCard from './FeedbackCard'
import getFeedback from '../utills/getFeedback'

function AllFeedback({ dbData, setDBData }) {
  useEffect(() => getFeedback(setDBData), [setDBData])

  return (
    <div className="bg-yellow-800/60 p-2 sm:p-3 flex flex-col gap-1 rounded-lg shadow-xl sm:min-w-[39%]">
      <div className="bg-yellow-100/90 p-2 rounded-sm mb-1 shadow-xl ">
        <p className="text-3xl text-center font-bold flex items-center justify-center gap-4 bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
          All Feedback's{' '}
          <b className=" text-[20px] w-[35px] h-[35px] bg-slate-800 rounded-full shadow-lg p-1 text-white">
            {dbData.length}
          </b>
        </p>
      </div>

      {dbData?.length ? (
        <div className="flex flex-col-reverse">
          {dbData.map((feedback) => (
            <div key={feedback._id}>
              <FeedbackCard p={feedback} />
            </div>
          ))}
        </div>
      ) : (
        <FeedbackCard p={{ name: 'Loading User', feedback: 'Loading....' }} />
      )}
    </div>
  )
}

export default AllFeedback
