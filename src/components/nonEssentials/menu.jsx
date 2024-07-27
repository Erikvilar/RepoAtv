import React from 'react'
import "/src/style/menu.scss"
import AudioPlayer from 'react-h5-audio-player';
import "/src/components/audio/audio.css"
import ListLink from './listLink'
import { Link } from 'react-router-dom'
const menu = () => {
    const listaAtv = [
        // Lista atv wilton
        { link: "/", title: "Front End Avancado", id: "wilton", submenu:[
            { link: "Lista05.1", title: "FEA Lista05 ✔️ " },
            { link: "Lista05.2", title: "FEA Lista05 ✔️ " },
            { link: "Lista06", title: "FEA Lista 06 ✔️" },
            { link: "", title: "Vazio 🚫" },
            { link: "", title: "Vazio 🚫" },
           
        ] },

        //lista atv Carlos
        { link: "/", title: "DB Avançado", id: "cricia", submenu:[     
            { link: "Atividade 1", title: "DBA  Atividade ✔️" },
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

            <AudioPlayer  src="https://drive.google.com/file/d/1o8-9sgBi1ED7kkDrLyCVMYi0X6qSY4a3/view?usp=sharing"
    onPlay={e => console.log("onPlay")}
    />
        </div>
    )
}

export default menu
