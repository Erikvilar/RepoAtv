import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HashRouter, Routes, Route} from "react-router-dom"
import App from './App';

import Teste2 from './components/solucoes/teste2';
import Ex1_1 from './components/solucoes/ex1/ex1_1';
import Ex1_2 from './components/solucoes/ex1/ex1_2';
import Home from "./components/home"


const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="ex1" element={<Ex1_1/>}/>
          <Route path="ex2" element={<Ex1_2/>}/>
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
