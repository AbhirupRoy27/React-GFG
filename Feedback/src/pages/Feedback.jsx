import React, { useState } from 'react'
import AllFeedback from '../Components/AllFeedback'
import { handleText, handleSubmit } from '../utills/handelform'

function Feedback() {
  const [data, setData] = useState({
    name: '',
    feedback: '',
  })

  const [dbData, setDBData] = useState([])

  return (
    <div className="flex flex-col sm:flex-row bg-slate-100 p-2 sm:p-3 gap-4">
      <form
        onSubmit={(e) => handleSubmit(e, data, setData, setDBData)}
        className="flex flex-col sm:flex-row sm:min-w-[60%] sm:min-h-[95vh]"
      >
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-full max-h-max p-3 sm:p-4 lg:p-6 rounded-lg shadow-xl">
          <div className="bg-white/10 flex flex-col rounded-lg shadow-sm shadow-white/30">
            <p className="text-center text-3xl p-2 font-semibold mt-4 text-white">
              Please fill the{' '}
              <b className="bg-gradient-to-br from-sky-200 to-violet-400 bg-clip-text text-transparent">
                Feedback
              </b>
            </p>
            <div className="flex justify-center p-2 lg:pl-30 lg:pr-30 flex-col">
              <label
                htmlFor="feedback"
                className="mb-2 font-semibold text-xl text-white "
              >
                Feedback
              </label>
              <textarea
                type="submit"
                id="feedback"
                className={`p-1 mb-4 ${
                  data.feedback ? 'bg-gray-100' : 'bg-gray-100/60'
                } focus:bg-gray-100 rounded resize-none active:scale-101 text-[18px]`}
                rows="3"
                placeholder="Type feedback here..."
                onChange={(e) => handleText(e, setData)}
                name="feedback"
                value={data.feedback}
              ></textarea>
              <label
                htmlFor="name"
                className="mb-2 font-semibold text-xl text-white"
              >
                Full Name
              </label>
              <input
                id="name"
                className={`p-2 mb-4 ${
                  data.name ? 'bg-gray-100' : 'bg-gray-100/60'
                } focus:bg-gray-100 rounded resize-none active:scale-101 text-[18px]`}
                placeholder="Enter Name"
                maxLength={20}
                onChange={(e) => handleText(e, setData)}
                value={data.name}
                name="name"
              />
            </div>
            <div className="flex justify-end p-4 lg:mr-26">
              <button
                type="submit"
                className="bg-blue-800 p-3 sm:p-4 max-w-[100px] text-white rounded active:shadow-lg opacity-75 hover:opacity-100 active:scale-102 font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <AllFeedback dbData={dbData} setDBData={setDBData} />
    </div>
  )
}

export default Feedback
