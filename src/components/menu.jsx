import React from 'react'
import "/src/style/menu.scss"
import ListLink from './listLink'
import { Link } from 'react-router-dom'
const menu = () => {
    const listaAtv = [
        // Lista atv wilton
        { link: "/", title: "Front End Web", id: "wilton", submenu:[
            { link: "w_ex1", title: "JSA01 -solução 1 ✔️ " },
            { link: "w_ex2", title: "JSA01 -solução 2 ✔️ " },
            { link: "w_ex5", title: "JSA05 ✔️" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },

        //lista atv Carlos
        { link: "/", title: "DB Avançado", id: "cricia", submenu:[     
            { link: "db_tarefa1", title: "Tarefa-1 " },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },
        { link: "/", title: "POO-2", id: "carlos", submenu:[     
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },
        { link: "/", title: "Spring ORM", id: "angotti", submenu:[     
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
          
        ] },
        { link: "/", title: "Testes Unitarios", id: "bruno", submenu:[
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
          
        ] },
        { link: "/", title: "Anotações", id: "anotations", submenu:[{ link: "anotations", title: "➡️ 3P Periodo" }, ] },
     
    ]
    return (
        <div className='menu-default'>
            <nav className='menu-nav'>
                <h1>Menu Links</h1>
                <Link to="/">Menu</Link>
                <ListLink listaAtv={listaAtv}/>
                <Link to="/">Sobre</Link>

            </nav>
        </div>
    )
}

export default menu
