import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TiUserAdd } from "react-icons/ti";
import { IoMdHome } from "react-icons/io";


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center gap-3 p-5 px-12'>
        <div onClick={() => navigate('/')} className=' mb-10 bg-pink-800 text-white font-bold px-3 py-2 rounded cursor-pointer flex items-center justify-center gap-3 w-[200px]'>
            <IoMdHome />
            <p>Home</p>
        </div>
        <div onClick={() => navigate('/add-user')} className=' mb-10 bg-pink-800 text-white font-bold px-3 py-2 rounded cursor-pointer flex items-center justify-center gap-3 w-[200px]'>
            <p  className=''>Add User</p>
            <div><TiUserAdd className='text-xl'/></div>
        </div>
        
    </div>
  )
}

export default Navbar