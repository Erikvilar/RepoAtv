import React from "react"
import Menu from "./components/menu"

import "./style/default.scss"
import { Outlet } from "react-router-dom"

function App() {
  return (
  <div className="app-default">
    <Menu/> 
    <Outlet/>
   </div>


  )
}

export default App
