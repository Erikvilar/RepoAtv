import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Routes, Route} from "react-router-dom"
import App from './App';


import Ex1_1 from './components/wilton/ex1/ex1_1';
import Ex1_2 from './components/wilton/ex1/ex1_2';
import Tarefa1 from './components/DBavancado/tarefa1/tarefa1';
import Home from "./components/home"


const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="w_ex1" element={<Ex1_1/>}/>
          <Route path="w_ex2" element={<Ex1_2/>}/>
          <Route path="db_tarefa1" element={<Tarefa1/>}/>
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
