import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import Login from './Login'
import { Loader } from '../components/Loader'

const Layout = () => {

  const {user, loading} = useSelector(state => state.auth)
  const location = useLocation()
  
  // Don't show dashboard navbar on the resume builder page so it can use full viewport height
  const hideNavbar = location.pathname.includes('/builder/')

  if(loading){
    return <Loader />
  }

  return (
    <div>
      {
        user ? (
            <div className='min-h-screen bg-gray-50'>
        {!hideNavbar && <Navbar />}
        <Outlet />
      </div>
        )
        : <Login />
      }
      
    </div>
  )
}

export default Layout