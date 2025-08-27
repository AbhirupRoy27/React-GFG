function NewHomePage({ ishomepage, setIsHomePage, navigate }) {
  return (
    <div>
      <h1>This is the New, Lazy-Loaded Home Page! 🚀</h1>
      <p>This component's codes was downloaded on demand.</p>
      <h1
        onClick={() => {
          navigate('/')
          setIsHomePage(!ishomepage)
        }}
      >
        Go Back {'<--'}
      </h1>
    </div>
  )
}

export default NewHomePage
