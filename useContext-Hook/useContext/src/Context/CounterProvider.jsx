// import { useState } from 'react'

// export default function CounterContext({ children }) {
//   const [num, setNum] = useState(0)

//   return (
//     <CountContext.Provider value={{ num, setNum }}>
//       {children}
//     </CountContext.Provider>
//   )
// }

import React, { useState } from 'react'
import { CountContext } from './CountContext'

export default function CounterProvider({ children }) {
  const [num, setNum] = useState(0)

  return (
    <CountContext.Provider value={{ num, setNum }}>
      {children}
    </CountContext.Provider>
  )
}
