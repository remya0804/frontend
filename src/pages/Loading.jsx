import React from 'react'
import loading from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='text-xl text-pink-800 font-bold flex items-center'>
        <img className='w-64 ' src={loading} alt="" />
        {/* <p className=''>Loading......</p> */}
    </div>
  )
}

export default Loading