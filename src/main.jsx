import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, HashRouter, RouterProvider} from "react-router-dom"
import App from './App';
import Home from './components/home';
const Routing  = ()=>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </HashRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Routing/>
  </React.StrictMode>,
)
