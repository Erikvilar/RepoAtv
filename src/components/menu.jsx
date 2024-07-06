import React from 'react'
import "/src/style/menu.scss"
import { Link } from 'react-router-dom'
const menu = () => {
    const listaAtv = [
        {link:"/", title:"home"},
        {link:"ex1", title:"Lista 01 - solução 1"},
        {link:"ex2", title:"Lista 01 - solução 2"}
    ]

    const lista = listaAtv.map((item, index)=>{
        return(
         
            <li key={index}>
                <Link to={item.link}>{item.title}</Link>
            </li>
        )
    })
    
  return (
    <div className='menu-default'>
    <nav className='menu-nav'>
        <h1>Menu Links</h1>
    <ul>
        {lista}
    </ul>
    </nav>
    </div>
  )
}

export default menu
