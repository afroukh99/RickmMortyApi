import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import "./layout.scss"

const Layout = () => {
  return (
    <div className='layout'>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout