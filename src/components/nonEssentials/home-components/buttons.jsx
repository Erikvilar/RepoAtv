import React from 'react'
import Marquee from "react-fast-marquee";

 const buttons = ({ path, img, text}) => {


  return (

    <a href={path} target='_blank' >
      <button>
        <img src={img} alt="" />
        <Marquee className='marquee' speed={20} pauseOnHover={true}  >
       <span>{text}</span> 
        </Marquee>
        
    
      </button>
     
      </a>
     

  )
}
export default buttons


