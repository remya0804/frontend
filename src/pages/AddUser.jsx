import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserDataContext } from '../context/UserDataContext'

const AddUser = () => {

    const navigate = useNavigate()

    const {userName,setUserName,
      userId,setUserId,
      userAge,setUserAge} = useContext(UserDataContext)

    const API_URL = import.meta.env.VITE_API_URL;

    const createUser = async (e) => {

        e.preventDefault();

        const userData = {userId,userName,userAge}

        try{
          const response = await axios.post(
            `${API_URL}/create-user`,
            userData,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          if(response){
            toast.success(response.data.message)
            navigate('/') 
            window.location.reload();    

          } 
        } catch (error) {
          if (error.response && error.response.status === 409){
            toast.error('User already exists!!!')
          }
        }           
    }

  return (
    <div className='p-12 w-full '>
        <form onSubmit={(e) => createUser(e)} action="" className='flex flex-col gap-6 w-full md:w-[60%]'>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} className='bg-transparent outline-none border border-pink-800 py-2 px-4 rounded' type="text" placeholder='Enter id'/>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} className='bg-transparent outline-none border border-pink-800 py-2 px-4 rounded w-full' type="text" placeholder='Enter name'/>
            <input value={userAge} onChange={(e) => setUserAge(e.target.value)} className='bg-transparent outline-none border border-pink-800 py-2 px-4 rounded w-full' type="number" min="0" max="100" placeholder='Enter age'/>
            <button type='submit' className='bg-pink-800 w-[100px] font-semibold text-white cursor-pointer p-2 rounded'> ADD </button>
        </form>
    </div>
  )
}

export default AddUser