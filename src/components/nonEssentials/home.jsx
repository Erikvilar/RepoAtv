import React from 'react'
import "/src/style/home.css"
import CarouselTemplate from './carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './home-components/buttons'
const home = () => {




  return (

      <div className='intro'>
<div className="intro-title">
        <h1>INSIDE ON MY UNIVERSE</h1>
        <p>Site para organizar minhas ideias e rotinas de estudo e trabalho pessoal.</p>
</div>
    <CarouselTemplate/>
        <div className='intro-buttons'>

          <Buttons path="https://classroom.google.com/"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rpkjIjFxUm9QR4uT6FEmrNNg1SraJKKdOQ&s"
        />
          <Buttons path="https://github.com/"
          img="https://www.svgrepo.com/show/475654/github-color.svg"
     />
          <Buttons path="https://ava.udicentro.iftm.edu.br/login/index.php"

            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logotipo_IFET.svg/800px-Logotipo_IFET.svg.png"
        />
      
        </div>
        <div className='direct-reserved'>
        <span>copyright Erik Developer, Brazil, MG | erikvilaralves@gmail.com</span>
        <span>© 2024 Erik Vilar copywrite</span>
        </div>
      </div>
   

  )
}

export default home
