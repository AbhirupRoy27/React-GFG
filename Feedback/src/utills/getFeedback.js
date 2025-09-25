export default function getFeedback(setDBData) {
  console.log('Connecing Server')
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api-feedback-zeta.vercel.app/api/users'
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setDBData(result) // save API data in state
    } catch (err) {
      setDBData([])
      console.error(err.message)
    }
  }
  fetchData()
}
