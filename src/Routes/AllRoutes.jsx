import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Player from '../Components/Player'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/playlist' element={<Player/>} />
    </Routes>
  )
}

export default AllRoutes