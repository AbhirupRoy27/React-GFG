import { useState } from 'react'
import formatLikes from '../utills/fotmatLikes'

function FeedbackCard({ p }) {
  const [isAi, setIsAi] = useState(false)
  const [agreeCount, setAgreeCount] = useState(p.upvote)

  return (
    <div className="bg-gradient-to-r from-amber-300 to-amber-200 p-2 rounded-sm shadow-xl hadow-black/60 mb-2 hover:scale-101 ">
      <p className="text-xl mb-2 font-semibold ml-2 font-mono">
        {p.name}'s Feedbacks
      </p>
      <p className="text-[18px] bg-gradient-to-r from-amber-300 to-amber-200 p-2 mb-2 rounded font-serif">
        <b>Feedback Description:</b> {p.feedback}
      </p>
      {p.name !== 'Loading' && (
        <div className="flex justify-between items-center">
          <div className="flex gap-4 sm:p-2">
            <div
              className="flex gap-1 items-center"
              onClick={() => {
                console.log(agreeCount), setAgreeCount(agreeCount + 1)
              }}
            >
              <p className="pl-2 pr-2 bg-slate-800 rounded-lg shadow-md shadow-black/30 flex items-center justify-center text-xl text-white">
                {formatLikes(agreeCount)}
              </p>
              <p className="text-[12px] sm:text-[18px]">Agreed </p>
            </div>
            <div
              className="flex gap-1 items-center bg-white/30 p-1 rounded-md active:scale-102"
              onClick={() => setIsAi(!isAi)}
            >
              <p className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] shadow-md shadow-black/30 bg-gray-800 rounded-full text-center text-xl sm:text-2xl">
                ✨
              </p>
              <p className="text-[12px] sm:text-[16px]">
                {isAi ? 'Close' : 'AI Summarize'}
              </p>
            </div>
          </div>
          <button
            className="bg-red-900/90 text-white p-2 rounded active:shadow-lg active:shadow-black/30 active:scale-102"
            onClick={() => console.log('deleted')}
          >
            Remove
          </button>
        </div>
      )}
      {isAi && (
        <div className="h-[200px] pl-4 pr-4 mt-4">
          <div className="p-2 flex justify-center items-center h-full bg-slate-800/20 rounded-md ">
            Ai Summarized text
          </div>
        </div>
      )}
    </div>
  )
}

export default FeedbackCard
