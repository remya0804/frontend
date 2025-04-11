import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userImage from '../assets/user.png'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext';

const Home = () => {

    const navigate = useNavigate()

    const {API_URL,allUsers,setAllUsers,fetchUsers,loading,setLoading} = useContext(UserDataContext)

    const deleteUser = async (id) => {
      const response = await axios.delete(`${API_URL}/delete/${id}`)
      toast.success(response.data.message)
      window.location.reload();    
    }

 
  return (
    <div className='p-12'>      
      
      {
        loading ? <Loading />
      
      : <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6  '>
        {
          allUsers.map((user,idx) => {
            return <div key={idx} className='flex flex-col items-center bg-gray-500/20 p-8 rounded'>
                      <img className='w-24' src={userImage} alt="" />
                    <p className='text-[24px] font-semibold text-blue-700'>{user.userName}</p>
                    <p className='text-md font-semibold text-gray-600'>User Id: <span className='text-pink-700'>{user.userId}</span></p>
                    <p className='text-md font-semibold text-gray-600'>Age: <span className='text-blue-500'>{user.userAge}</span> </p>

                    <div className='flex items-center gap-3 mt-4'>
                      <FaEdit onClick={() => navigate(`/edit/${user.userId}`)} className='text-xl text-green-600 cursor-pointer' />
                      <MdDelete onClick={() => deleteUser(user.userId)} className='text-xl text-red-600 cursor-pointer' />
                    </div>
                  </div>
          })
        } 
      </div>
}
    </div>
  )
}

export default Home