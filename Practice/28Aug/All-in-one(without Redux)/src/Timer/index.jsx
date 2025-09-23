import React, { useEffect, useState } from 'react'

function getTimeUntilMidnight() {
  const now = new Date()
  const midnight = new Date()

  // set to next midnight
  midnight.setHours(24, 0, 0, 0)

  return midnight - now
}

function Index() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight())
  const dates = new Date()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="bg-teal-200 text-center flex">
        <div className="bg-blue-200 min-w-[50%]">
          <p className="text-3xl p-4">Current Time</p>
          <p className="p-2 text-xl">{dates.toLocaleTimeString()}</p>
        </div>
        <div className="flex flex-col justify-center min-w-[50%]">
          <p className="text-4xl font-semibold pt-4">Timer</p>
          <div className=" mt-2 font-[monospace] text-xl p-2">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>
      <div className="bg-gray-300 p-3">
        <p>{}</p>
      </div>
    </>
  )
}

function formatTime(ms) {
  if (ms <= 0) return '00:00:00'

  const totalSeconds = Math.floor(ms / 1000)
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    '0'
  )
  const seconds = String(totalSeconds % 60).padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export default Index
