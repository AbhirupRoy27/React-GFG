import { useState } from 'react'
import './App.css'
import { addUser, removeUser } from './Slice/slice'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

// let idNum = 0

function App() {
  const [name, setName] = useState('')
  const [countUser, setCountUser] = useState(0)

  const dispatch = useDispatch()
  const count = useSelector((state) => state.userNames)

  //console.log(count)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    // dispatch(addUser({ id: idNum, name }))
    // idNum = idNum + 1
    dispatch(addUser({ id: uuid(), name }))
    setName('')
    // console.log(count)
  }

  const handleRemove = (id) => {
    // idNum = idNum - 1
    // dispatch(removeUser(idNum))
    dispatch(removeUser(id))
  }

  const handleCount = () => {
    setCountUser(count.length)
  }

  return (
    <>
      <div className="top-bar">
        <h2 className="heading">Add TO-DO</h2>
        <div className="count-container">
          <button onClick={handleCount}>Total Task?</button>
          {countUser > 0 ? <p>{countUser}</p> : <p>- -</p>}
        </div>
      </div>

      <div className="input-box">
        <label htmlFor="Name">User Task</label>
        <input
          id="Name"
          value={name}
          placeholder="Enter User Task"
          onChange={handleChange}
        />
        <button onClick={handleClick} disabled={!name}>
          +
        </button>
      </div>
      {/* {idNum > 0 && <button onClick={handleRemove}>-</button>} */}
      {/* <p>{name}</p> */}
      {count.map((users) => (
        <div key={users.id} className="user-item">
          <p>{users.name}</p>
          <button onClick={() => handleRemove(users.id)}>-</button>
        </div>
      ))}
    </>
  )
}

export default App
