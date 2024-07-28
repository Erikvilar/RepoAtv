import React from 'react'
import "/src/style/menu.css"


import ListLink from './listLink'
import { Link } from 'react-router-dom'
const menu = () => {
    const listaAtv = [
        // Lista atv wilton
        { link: "/", title: "Front End Advanced", id: "wilton", submenu:[
            { link: "Lista05.1", title: "FEA Lista05 ✔️ " },
            { link: "Lista05.2", title: "FEA Lista05 ✔️ " },
            { link: "Lista06", title: "FEA Lista 06 ✔️" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },

        //lista atv Carlos
        { link: "/", title: "Database Advanced", id: "cricia", submenu:[     
            { link: "Atividade 1", title: "DBA  Atividade ✔️" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },
        { link: "/", title: "OOP-Programming", id: "carlos", submenu:[     
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },
        { link: "/", title: "Mapped Object Relational", id: "angotti", submenu:[     
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
          
        ] },
        { link: "/", title: "Unity Test", id: "bruno", submenu:[
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
          
        ] },
        { link: "/", title: "Annotations", id: "anotations", submenu:[
        { link: "anotations", title: "➡️ 3P Periodo" },           
        { link: "", title: "Vazio 🚫" },
        { link: "", title: "Vazio 🚫" },
        { link: "", title: "Vazio 🚫" },
        { link: "", title: "Vazio 🚫" },
        { link: "", title: "Vazio 🚫" },
    ] },
     
    ]
    return (
        <div className='menu-default'>
            <nav className='menu-nav'>
                <h1>Menu Links</h1>
                <Link to="/">Menu</Link>
                <ListLink listaAtv={listaAtv}/>
                <Link to="/">Sobre</Link>

            </nav>

     <p className='autor'>Desenvolvido por Erik Alves 愛</p>
        </div>
    )
}

export default menu
