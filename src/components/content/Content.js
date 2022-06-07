import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard2 from '../contentss/Dashboard2'
import SearchPosts from '../../components/search/SearchPosts'
import AddUser from '../contentss/AddUser'
import Navbar from '../dashboard/Navbar'
import './content.css'

const Content = () => {
  return (
    <div className='cont' >
        <Navbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard2/>} />
            <Route path="/search" element={<SearchPosts />} />
            <Route path="/adduser" element={<AddUser/>} />
        </Routes>
    </div>
  )
}

export default Content