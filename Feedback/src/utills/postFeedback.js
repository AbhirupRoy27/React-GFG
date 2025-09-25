import getFeedback from './getFeedback'

export default async function postFeedback(data, setDBData) {
  try {
    const response = await fetch(
      'https://api-feedback-zeta.vercel.app/api/users',
      {
        method: 'POST', // POST request to send data
        headers: {
          'Content-Type': 'application/json', // Tell server we're sending JSON
        },
        body: JSON.stringify(data),
      }
    )
    if (!response.ok) {
      alert('Data not added')
      return
    }
    alert('Data Added')

    getFeedback(setDBData)
  } catch (error) {
    console.error(error.message)
  }
}
