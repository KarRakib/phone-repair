import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shear/Footer/Footer'
import Header from '../Shear/Header/Header'

function Main() {
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Main