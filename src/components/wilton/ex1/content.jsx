import React from 'react'
import "../ex1/ex1.scss"
const content= (props) => {

    return (
  
        <div className='box-content'>
            <img src="https://conteudo.imguol.com.br/c/entretenimento/e0/2023/04/10/mulher-feliz-sorriso-1681149332998_v2_1253x836.jpg" alt="" />
            <div className='sub-content'>
                <h1>{props.title}</h1>
                <p>"{props.text}"</p>
                <p>"{props.quote}"</p>
            </div>
        </div>
    
    )
}

export default content
