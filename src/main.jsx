import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import UserDataContextProvider from './context/UserDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </BrowserRouter>
)
