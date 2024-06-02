import React from 'react'
import Layout from '../component/header/Layout'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import "../Style/Contact.css"

const Contact = () => {
  return (
    <Layout>
          <div className='Contact-contain'>
                <div className='contact-image'>
                     <img src='hotal.jpg' alt='image'/>
               </div>

              <div className='contact-address'>
                    <h1>Hotel LandMark</h1>
                    <p>H/1 , New Bus Stand, sanjay Nagar, Rewa, Madhya Pradesh - 486001</p>
                    <div className='contact-icon'>
                  <p> <span> <PhoneIcon/> </span>+91-9098418540</p>
                  <p><span> <MailOutlineIcon/> </span> Info@Realtest.com</p>
               </div>
             </div>
          </div> 

       
             <div className='form-container'>
               <h1>Send Your Enquiries</h1>
                <form  action=''className='form-Box'>
                <div className='Box1'>
                    <lable for="fname">Enter Name*</lable>
                    <input type='text' id="fName"  name='fname'  placeholder='enter name'/>
                    <lable for="Email">Enter Email*</lable>
                    <input type='Mail' id="Email"  name='Email'  placeholder='enter name'/>
                        <label for="Hotel">Hotal*</label>
                         <select name="Hotel" id="Hotel">
                           <optgroup label="select Hotel">
                             <option>Rewa</option>
                             <option>Satna</option>
                             <option>Jabalpur</option>
                             <option>Indore</option>
                             <option>Bhopal</option>
                             <option>Delhi</option>
                             <option>Mumbai</option>
                           </optgroup>  
                         </select>     <br/>

                         <lable for="pass">Enter password*</lable>
                    <input type='password' id="pass"  name='pass'  placeholder='enter name'/>
                    <lable for="mess">Message*</lable>
                    <input type='message' id="mess"  name='mess'  placeholder='enter name'/>
                    <label for="Hotel">Category*</label>
                    <select name="Category" id="">
                           <optgroup label="select Category">
                             <option>Room</option>
                             <option>Dining</option>
                             <option>Banquets</option>
                           </optgroup>  
                         </select>   <br/>   
                        <button>Submit</button>                          

                </div>       
                </form>
               </div> 
               
               <div className='map'>
               <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14516.969268277402!2d81.30693069639604!3d24.546287050336236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b07e544d1e1%3A0x6dc6913db224e698!2sHotel%20Dee%20Landmark!5e0!3m2!1sen!2sin!4v1716553669408!5m2!1sen!2sin" 
                   width="100%" height="450"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iFrame>
               </div>
               <hr/>
           

    </Layout>
  )
}

export default Contact
