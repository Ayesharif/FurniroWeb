import React from 'react'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function UserLayout() {
  return (
    <div className='overflow-hidden'>
       <NavBar/>

<Outlet />


       <Footer/>
    </div>
  )
}
