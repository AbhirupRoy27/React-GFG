import Feedback from './pages/Feedback'

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-2xl sm:mb-4">
        <h1 className="text-3xl font-bold bg-gradient-to-bl from-slate-100 to-neutral-300 bg-clip-text text-transparent">
          Feedback Form
        </h1>
      </div>
      <Feedback />
    </>
  )
}

export default App
