import React from 'react'
import "/src/style/Source.css"
const source = ({gitUrl}) => {
  return (
    <div className='source'>
    <p>Clique aqui para ver o codigo desta página</p>
    <a href={gitUrl}>
      <img src="https://img.shields.io/badge/source-react-blue" alt=""  />
      </a>
    </div>
  )
}

export default source
