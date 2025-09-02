import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { page404 } from '../../Slice/Page404Slice'

function Page404Com() {
  const dispatch = useDispatch()
  const src = useSelector((state) => state.page404.src)
  const error = useSelector((state) => state.page404.err)
  const status = useSelector((state) => state.page404.status)

  useEffect(() => {
    const url =
      'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1756728730/OOPs_Page_not_Found_dzexi3.jpg'

    dispatch(page404(url))
  }, [dispatch])

  if (status === 'loading') return <div>Loading...</div>

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        <b className="text-red-900">Error : </b>
        {error}
      </div>
    )
  }

  if (src) {
    return (
      <div
        style={{ textAlign: 'center' }}
        className="flex items-center justify-center"
      >
        <img src={src} alt="page not found" className="h-[94vh]" />
      </div>
    )
  }
  return null
}

export default Page404Com
