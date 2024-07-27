import React from "react"
import Menu from "./components/nonEssentials/menu"

import "./style/default.scss"
import { Outlet } from "react-router-dom"

function App() {
  return (
  <div className="app-default">
    <Menu/> 
    <div className='content'>
    <Outlet/>
    </div>
   </div>


  )
}

export default App
