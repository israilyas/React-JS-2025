import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 w-full py-10 text-center  text-white'>
     <h1 className='font-bold uppercase text-xl'>User: {userId}</h1>
    </div>
  )
}

export default User
