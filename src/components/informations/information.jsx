import React from 'react'

const information = (props) => {
  return (
    <div className={props.class}>
        <h1>{props.title}</h1>
        <div>
            <p>{props.description}</p>
        </div>
        <img src={props.image} alt="" />
        <div className='div-notes'>
          <span className='notes'>{props.note}</span><p>{props.anotation}</p>
        </div>
    </div>
  )
}

export default information
