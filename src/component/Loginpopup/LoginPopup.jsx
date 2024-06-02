import React, { useState } from 'react'
import "../../Style/LoginPopup.css" 
import CloseIcon from '@mui/icons-material/Close';


const LoginPopup = (setShowLogin) => {

const [currstate,setCurrState] = useState(" Login")


  return (
    <div className='loginpopup'>
         <form className='login-popup-form'>
             <div className='login-popup-title'>
                <h2>{currstate}</h2>
                <CloseIcon OnClick={()=>setShowLogin(false)}  />
             </div>
             <div className='login-popup-input'>
             {currstate ==="Login" ? <></>:<input type='text' placeholder=' Enter your name' required/>}                  
                 <input type='email' placeholder=' Enter your Email' required/>  
                 <input type='password' placeholder='Enter your Password' required/>  
             </div>

             <button>{currstate === "Sign up"?"Create account":"Login"}</button>

             <div className='login-popup-condition'>
                <input type='checkbox' required/>
                  <p>By continuing, i agree to the term of use and privacy policy</p>
             </div>
             {currstate === "Login"
             ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
             :<p> Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
             }
         </form>
    </div>
  )
}

export default LoginPopup
