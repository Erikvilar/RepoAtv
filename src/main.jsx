import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App';
import Home from './components/home';
const router= createBrowserRouter([

  { path:"/",element:<App/>},
  { path:"/home",element:<Home/>},

]

  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
