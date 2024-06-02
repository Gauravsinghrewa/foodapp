import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "../../Style/Banner.css"



const responsive = {
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner = () => {

  return (
    <div className='banner-container'>
             <Carousel 
    swipeable={false}
  draggable={false}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  slidesToSlide={1}
  autoPlay={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

   <div className='banner-img1'>
   <img src="banner1.png" alt='img1'/> 
   </div>

  <div className='banner-img2'> 
  <img src='banner2.png' alt='img2'/> 
  </div>

  <div className='banner-img3'> 
  <img src='banner3 (1).png' alt='img3'/>
 </div>

  <div className='banner-img4'> 
  <img src='6244959.png' alt='img4'/> 
  </div>
</Carousel> 
    </div>
   
  )
}

export default Banner


