import React from 'react'

const information = (props) => {
  return (
    <div className={props.class}>
        <h1>{props.title}</h1>
        <div>
            <p>{props.description}</p>
        </div>
        <img src={props.image} alt="" />
    </div>
  )
}

export default information
