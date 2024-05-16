import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='h-[500px] w-full text-center '>
      <h1 className='text-red-600 text-3xl font-bold'>Error</h1>
      <Link to="/">
      <button className='w-[150px] bg-blue-400 text-white h-[40px] rounded'>back to homepage</button>
      </Link>
    </div>
  )
}

export default Error
