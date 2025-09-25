import getFeedback from './getFeedback'

export const handleText = (e, setData) => {
  const { name, value } = e.target
  setData((prev) => ({ ...prev, [name]: value }))
}

export const handleSubmit = (e, data, setData, setDBData) => {
  e.preventDefault()

  if (!data.name || !data.feedback) {
    alert('Both filed must have something...')
    return
  }
  console.log(data)
  setData({ name: '', feedback: '' })

  getFeedback(setDBData)
}
