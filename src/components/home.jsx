import React from 'react'
import "../style/home.scss"

import Buttons from './home-components/buttons'
const home = () => {
  return (
    <div className='content'>
      <div className='intro'>
        <div className='img-div'>
          <img src="https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png" alt="" />
        </div>
        <h1>Repositorio de Atvidades React IFTM</h1>
        <div className='intro-buttons'>

          <Buttons
            path="https://www.youtube.com/watch?v=5s57C7leXc4"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rpkjIjFxUm9QR4uT6FEmrNNg1SraJKKdOQ&s"
            title="Meu Classroom"
          />
          <Buttons 
          path="https://github.com/"
            img="https://www.svgrepo.com/show/475654/github-color.svg"
            title="Meu Github"
          />
          <Buttons path="https://ava.udicentro.iftm.edu.br/login/index.php"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logotipo_IFET.svg/800px-Logotipo_IFET.svg.png"
            title="Meu Moodle"
          />

        </div>
      </div>
    </div>
  )
}

export default home
