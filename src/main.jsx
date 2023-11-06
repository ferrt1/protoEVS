import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import  App  from './App.jsx'
import { LoginPage } from './components/login/LoginPage.jsx'
import { SearchTravels } from './components/travels/SearchTravels.jsx'
import { AdminForms} from './components/adminpage/AdminForms.jsx'
import { Register } from './components/login/Register.jsx';
import { UserPage } from './components/login/UserPage.jsx';
import './css/index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/search',
    element: <SearchTravels/>
  },
  {
    path: '/adminform',
    element: <AdminForms/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/usersession',
    element: <UserPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
