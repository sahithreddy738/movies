import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='max-w-full max-h-screen flex flex-col'>
        <Header />
        <Outlet/>
    </div>
  )
}

export default Home