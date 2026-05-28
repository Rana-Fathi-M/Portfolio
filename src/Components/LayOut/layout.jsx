import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
import Footer from '../Footer/Footer';



function LayOut() {
  useEffect(
    () => {
      console.log("Mounting");
    }
    , [])
  return (
    <div>
      <NavBar />
      <div className="mx-auto overflow-hidden bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default LayOut