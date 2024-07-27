import React from 'react'


const buttons = ({ path, img, title}) => {


  return (

    <a href={path} target='_blank' >
      <button>
        <img src={img} alt="" />
      </button>
      </a>
     

  )
}

export default buttons
