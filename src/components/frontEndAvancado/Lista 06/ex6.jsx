import React from 'react'
import Props from './props'
import Source from '../../nonEssentials/home-components/source'

const ex6 = () => {
  return (
    <section className="component">
]
      <Props title="Acesso a informação" information="Veja dados de transparencia e governaça"/>
      <div className='contents'>
      <Props title="PLANO DE DESENVOLVIMENTO INSTITUCIONAL" information="none"/>
      <Props title="PESQUISA PUBLICA PROCESSOS IFTM" information="none"/>
      <Props title="LICITAÇÕES E CONTRATOS" information="none"/>
      <Props title="RECEITAS E DESPESAS" information="none"/>
      <Props title="DADOS ABERTOS" information="none"/>
      <Props title="TRANSPARENCIA E PRESTAÇÃO DE CONTAS " information="none"/>
      <Props title="SERVIDORES " information="none"/>
      <Props title="PERGUNTAS FREQUENTES " information="none"/>
      </div>
    <Source gitUrl={"https://github.com/Erikvilar/RepoAtv/tree/principal/src/components/wilton/ex5"}/>
    </section>
  )
}

export default ex6
