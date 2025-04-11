import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserDataContext'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import axios from 'axios'
import { toast } from 'react-toastify'

const Edit = () => {

    const {allUsers,setAllUsers,fetchUsers,loading,setLoading,userName,setUserName,userId,setUserId,userAge,setUserAge,API_URL} = useContext(UserDataContext)

    const navigate = useNavigate()

    const [userInfo,setUserInfo] = useState([])

    const {id}= useParams()

    useEffect(() => {
          if(allUsers && id){
            const currentUserData = allUsers.find((user) => user.userId == id)
            if(currentUserData){
                setUserInfo(currentUserData)
                setUserName(currentUserData.userName)
                setUserAge(currentUserData.userAge)
                setLoading(false)
            }
          }
        },[allUsers,id])

        const updateUser = async (e) => {

            e.preventDefault();
    
            const userData = {userId:id,userName,userAge}
    
            try{
              const response = await axios.put(
                `${API_URL}/update/${id}`,
                userData,
                {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );
              
              if(response){
                toast.success("User data updated successfully!!!")
                navigate('/') 
                window.location.reload();    

              } 
            } catch (error) {
            //   if (error.response && error.response.status === 409){
                toast.error(error)
            //   }
            }           
        }
              
  return (
    <div className='p-12 w-full '>
        {
            loading ? <Loading />

        :  <form onSubmit={(e) => updateUser(e)} action="" className='flex flex-col gap-6 w-full md:w-[60%]'>
            <input  value={userName} onChange={(e) => setUserName(e.target.value)} className='bg-transparent outline-none border border-pink-800 py-2 px-4 rounded w-full' type="text" placeholder='Enter name'/>
            <input  value={userAge} onChange={(e) => setUserAge(e.target.value)} className='bg-transparent outline-none border border-pink-800 py-2 px-4 rounded w-full' type="number" min="0" max="100" placeholder='Enter age'/>
            <button type='submit' className='bg-pink-800 w-[100px] font-semibold text-white cursor-pointer p-2 rounded'> Update </button>
        </form> }
    </div>
  )
}

export default Edit