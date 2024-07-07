import React from 'react'
import "/src/style/menu.scss"
import ListLink from './listLink'
import { Link } from 'react-router-dom'
const menu = () => {
    const listaAtv = [
        // Lista atv wilton
        { link: "/", title: "Front End Web", id: "wilton", submenu:[
            { link: "ex1", title: "Lista 01 - solução 1 " },
            { link: "ex2", title: "Lista 01 - solução 2 " }
        ] },

        //lista atv Carlos
        { link: "/", title: "DB Avançado", id: "cricia", submenu:[     
            { link: "", title: "Vazio" },
            { link: "", title: "Vazio " },
        ] },
        { link: "/", title: "POO-2", id: "carlos", submenu:[     
            { link: "", title: "Vazio" },
            { link: "", title: "Vazio " },
        ] },
        { link: "/", title: "Spring ORM", id: "angotti", submenu:[     
            { link: "", title: "Vazio" },
            { link: "", title: "Vazio " },
        ] },
        { link: "/", title: "Testes Unitarios", id: "bruno", submenu:[
            { link: "", title: "Vazio" },
            { link: "", title: "Vazio " },     
        ] },
     
    ]


    return (
        <div className='menu-default'>
            <nav className='menu-nav'>
                <h1>Menu Links</h1>
                <Link to="/">Menu</Link>
                <ListLink listaAtv={listaAtv}/>
                <Link to="/">Sobre</Link>
                <Link to="/">Anotações</Link>
            </nav>
        </div>
    )
}

export default menu
