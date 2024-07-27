import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Routes, Route} from "react-router-dom"
import App from './App';



import Home from './components/nonEssentials/home';
import Anotations from './components/anotations/anotations';
import Ex5_2 from './components/frontEndAvancado/Lista 05/ex5_2';
import Ex5_1 from './components/frontEndAvancado/Lista 05/ex5_1';
import Ex_6 from './components/frontEndAvancado/Lista 06/ex6';
import Atividade1 from './components/DBavancado/atividade1';
const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="Lista05.1" element={<Ex5_1/>}/>
          <Route path="Lista05.2" element={<Ex5_2/>}/>
          <Route path="Lista06" element={<Ex_6/>}/>
          <Route path="Atividade 1" element={<Atividade1/>}/>
          <Route path="anotations" element={<Anotations/>}/>
        
        </Route>
       

       
       
      </Routes>
    </HashRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Routing/>
  </React.StrictMode>,
)
