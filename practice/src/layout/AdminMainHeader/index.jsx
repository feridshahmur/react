import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminheader from '../AdminHeader'

const Adminmainheader = () => {
  return (
    <>
        <Adminheader/>
        <Outlet/>

    </>
  )
}

export default Adminmainheader