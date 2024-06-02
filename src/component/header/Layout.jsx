import  { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginPopup from '../Loginpopup/LoginPopup'
const Layout = ({children}) => {
const [showLogin,setShowLogin]= useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
    <div>
    <Header setShowLogin={setShowLogin}/>
      <div>{children}</div>
      <Footer/>
    </div> 
    </>
  )
}

export default Layout
