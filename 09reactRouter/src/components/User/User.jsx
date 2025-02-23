import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700 h-[70vh] w-full py-10 text-center  text-white flex flex-row justify-center items-center md:mt-16'>
    {/* <div className='bg-white h-[30%] w-[50%]'>

    </div> */}
     <h1 className='font-extrabold uppercase text-6xl text-white'>User: {userId}</h1>
    </div>
  )
}

export default User
