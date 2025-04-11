import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';


const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit/:id' element={<Edit />} />
        

      </Routes>
      
    </div>
  )
}

export default App