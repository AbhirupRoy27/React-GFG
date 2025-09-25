import React, { useState } from 'react'
import AllFeedback from '../Components/AllFeedback'
import { handleText, handleSubmit } from '../utills/handelform'

function Feedback() {
  const [data, setData] = useState({
    Name: '',
    feedback: '',
  })

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e, data, setData)}
        className="flex flex-col sm:flex-row justify-around p-2 sm:p-3 gap-2 bg-slate-100 min-h-[95vh]"
      >
        <div className="bg-blue-100 sm:min-w-[59.5%] max-h-max p-3 sm:p-4 lg:p-10 rounded-lg shadow-xl">
          <div className="bg-white flex flex-col rounded-lg shadow-lg hover:scale-101">
            <p className="text-center text-3xl p-2 font-semibold mt-4">
              Please fill the <b className="text-blue-800">Feedback</b>
            </p>
            <div className="flex justify-center p-2 lg:pl-30 lg:pr-30 flex-col">
              <label htmlFor="name" className="mr-2 p-2 font-semibold text-xl">
                Name
              </label>
              <input
                id="name"
                className="mb-4 p-2 bg-gray-100 rounded active:scale-101"
                placeholder="Enter Name"
                maxLength={20}
                onChange={(e) => handleText(e, setData)}
                value={data.Name}
                name="Name"
              />
              <label
                htmlFor="feedback"
                className="mr-2 p-2 font-semibold text-xl "
              >
                Feedback
              </label>
              <textarea
                type="submit"
                id="feedback"
                className="w-full p-2  bg-gray-100 rounded resize-none active:scale-101"
                rows="3"
                placeholder="Type feedback here..."
                onChange={(e) => handleText(e, setData)}
                name="feedback"
                value={data.feedback}
              ></textarea>
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
        <AllFeedback />
      </form>
    </>
  )
}

export default Feedback
