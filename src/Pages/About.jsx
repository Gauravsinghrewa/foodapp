import React from 'react'
import Layout from '../component/header/Layout'

const About = () => {
  return (
    <Layout>
        <div className='about-container'>
             <div className='about-image'>
                <img src='aboutBanner.jpg' alt='img1'/>
             </div>

             <div className='about-contant'>
                    <div className='left-contant'>
                       <h1>About Us</h1>
                       <p>Renowned for creating “Yours Truly” service, Landmark Group of Hotels is a sophisticated collection of individually 
                       designed hotels catering to both leisure and business travellers with stylish guest rooms and versatile meeting facilities. 
                       Besides earning recognition for our world-class amenities and 
                       services in the hospitality sector, Landmark has spread its wings with its Pan-India presence.</p>
                    </div>

                    <div className='right-contant'>
                    <span>
                    <img src='hotel-landmark.jpg' alt='img2'/>
                    </span>
                    </div>

                    <div className=''>

                    </div>
             </div>
        </div>

    </Layout>
  )
}

export default About
