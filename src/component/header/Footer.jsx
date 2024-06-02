import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

import "../../Style/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-contain'>
         <div className='footer-left'>
           <img src='1.png' alt='img'/>
           <p>Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates,
            filters it down based on your unique calibration,
            and schedules your favorites on your calendar in a matter of days.</p>
           <div className='footer-icon'>
            <ul>
              <li><a href='www.instagram.com' /><InstagramIcon/> </li>
            </ul>
            <ul>
              <li><a href='www.Twitter.com' /> <TwitterIcon/> </li>
            </ul>
            <ul>
              <li><a href='www.linkdin.com' /><LinkedInIcon/> </li>
            </ul>
          
           </div>
         </div>

         <div className='footer-content-center'>
              <h1>Company</h1>
              <div className='company-list'>
                   <ul>
                     <li>Home</li>
                   </ul>
                   <ul>
                     <li>Delivery</li>
                   </ul>
                   <ul>
                     <li>About Us</li>
                   </ul>
                   <ul>
                     <li>privacy policy</li>
                   </ul>
              </div>
         </div>

         <div className= "footer-right">
                  <h1>Contact Us</h1>
                  <div className='contsct-details'>
                   <p><span> <LocationOnIcon/> </span> Allahabad Road,Rewa,old Bus stop</p>
                   <p><span> <MailOutlineIcon/> </span>Info@Realtest.com</p>
                   <p> <span> <PhoneIcon/> </span> +91-9098418540</p>
                  </div>

                  <div className='Card-icon'>
                        <img src='https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/visa-business-debit-card-800x450.jpg' alt=''/>
                        <img src='https://www.pikpng.com/pngl/m/16-165409_contactless-debit-card-bank-of-india-atm-card.png' alt=''/>
                        <img src='https://w7.pngwing.com/pngs/114/836/png-transparent-atm-card-credit-card-debit-card-master-card-major-credit-cards-colored-icon.png' alt=''/>
                        <img src='https://p1.hiclipart.com/preview/635/481/132/credit-card-icon-atm-card-icon-debit-card-icon-visa-icon-bank-electronic-bill-payment-internet-mastercard-png-clipart.jpg' alt=''/>
                  </div>
         </div>
      </div>
      <hr/>
      <h4 className='footer-copyright'> copyright 2024 @ Reat-Test.com  - All Right Reserved.</h4>
    </div>
  )
}

export default Footer
