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
    <div className="flex flex-col bg-slate-100 pl-2 pr-2 pb-2 pt-2 sm:pl-20 sm:pr-20 gap-4">
      <form
        onSubmit={(e) => handleSubmit(e, data, setData, setDBData)}
        className="flex flex-col sm:flex-row"
      >
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-full max-h-max p-3 sm:p-4 lg:p-6 rounded-lg shadow-xl">
          <div className="bg-white/10 flex flex-col rounded-lg shadow-sm shadow-white/30">
            <p className="text-center text-3xl p-2 font-bold mt-4 tracking-wider bg-gradient-to-br from-sky-200 to-violet-400 bg-clip-text text-transparent">
              How do you feel about this Page <b className="text-5xl"> ?</b>
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
                } focus:bg-gray-100 rounded resize-none active:scale-101 text-[18px] tracking-wide`}
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
                } focus:bg-gray-100 rounded resize-none active:scale-101 text-[18px] tracking-wide`}
                placeholder="Enter Name"
                maxLength={20}
                onChange={(e) => handleText(e, setData)}
                value={data.name}
                name="name"
              />
            </div>
            <div className="flex justify-end p-3 lg:mr-26 sm:mb-6">
              <button
                type="submit"
                className="bg-blue-800 p-3 sm:p-3 max-w-[110px] text-white rounded active:shadow-lg active:scale-102 font-bold tracking-widest "
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
