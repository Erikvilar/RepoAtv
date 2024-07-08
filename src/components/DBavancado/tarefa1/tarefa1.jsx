import React from 'react'

import Information from '../../informations/information'
import "../tarefa1/tarefa1.scss"
const tarefa1 = () => {
  return (
    <div className='db_t1'>
      <Information title="DB avançado Lista 01"
        class="information-content"
        description=" Projetar um banco de dados e fazer o que se pede nos exercicios abaixo, data de entrega para 12 /de Jul/2024."
        image="src/images/image.png"/>
      <Information title="Resolução"
        class="information-content"
        description="Primeiro passo implementei uma criação de um banco de dados no Workbench"
        image="src/images/db_t1.png"/>
    </div>
  )
}

export default tarefa1