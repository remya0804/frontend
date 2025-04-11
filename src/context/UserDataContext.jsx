import { createContext } from "react";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UserDataContext = createContext()

const UserDataContextProvider = (props) => {

    const [allUsers,setAllUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [userName,setUserName] = useState("")
    const [userId,setUserId] = useState("")
    const [userAge,setUserAge] = useState("")

    const API_URL = import.meta.env.VITE_API_URL;

    const fetchUsers = async () => {
        const response = await axios.get(`${API_URL}/users`)
        const data = response.data.Items;
        setAllUsers(data)
        setLoading(false)
      }

    const values = {
        allUsers,setAllUsers,
        fetchUsers,
        API_URL,
        loading,setLoading,
        userName,setUserName,
        userId,setUserId,
        userAge,setUserAge

    }

    useEffect(() => {
        fetchUsers()
      },[])

    return (

        <UserDataContext.Provider value={values}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export default UserDataContextProvider