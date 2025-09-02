import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById } from '../../Slice/AsyncSlice' // We use the same thunk as before

function AsyncREDUX() {
  // 1. Use State to store the value from the input box
  const [userIdInput, setUserIdInput] = useState('')

  const dispatch = useDispatch()
  const { entity: user, status, error } = useSelector((state) => state.user)

  // a handler function for the button click
  const handleFetchUser = () => {
    // Validation to ensure the input is not empty
    if (userIdInput.trim()) {
      // Dispatch the thunk, passing the ID from our local state
      dispatch(fetchUserById(userIdInput.trim()))
    }
    setUserIdInput('')
  }

  return (
    <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
      <h1 className="font-semibold text-2xl">Fetch a User from </h1>
      <div className="flex gap-2">
        <input
          className="border-1 rounded p-[4px] w-[60px]"
          type="number"
          max={10}
          min={0}
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
          placeholder="1-10"
        />
        <button onClick={handleFetchUser} className="p=[6px]">
          Fetch User
        </button>
      </div>

      {/* The rendering logic for status remains the same */}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && user && (
        <div>
          <h2>User Details</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      )}
    </div>
  )
}

export default AsyncREDUX
