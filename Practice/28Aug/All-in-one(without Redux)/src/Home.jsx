import React from 'react'
import CounterUseState from './Compo/Counter/Counter'
import CounterContext from './Compo/CounterContext/CounterCompo'
import ReContext from './Compo/ReContext/ReContext'
import NameForm from './Compo/GPTForm/NameForm'

const posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

function Home() {
  return (
    <>
      <div className="flex justify-evenly gap-1">
        <div className="border h-100 w-1/6 mr-1 mt-1"></div>
        <div className="border h-full w-3/6 mt-1">
          <>
            {posts.map((p) => (
              <div key={p.id} className="postcard">
                {p.id === 1 && <CounterUseState />}
                {p.id === 2 && <CounterContext />}
                {p.id === 3 && <ReContext />}
                {p.id === 4 && <NameForm />}
              </div>
            ))}
          </>
        </div>
        <div
          className="border h-100 w-2/6 bg-post text-center flex flex-col gap-4"
          id="act-lst"
        >
          <p className="text-2xl text-emerald-900">@account</p>
          <p className="text-lg">@account</p>
          <p className="text-lg">@account</p>
          <p className="text-lg">@account</p>
          <p className="text-lg">@account</p>
        </div>
      </div>
    </>
  )
}

export default Home
