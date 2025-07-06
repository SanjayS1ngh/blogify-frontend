import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className='container'>
        {children}
      </main>
    </div>
  )
}

export default Layout