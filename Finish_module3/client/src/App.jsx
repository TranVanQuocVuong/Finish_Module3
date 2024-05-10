import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'


export default function App() {
  return (
    <div style={{height:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}
