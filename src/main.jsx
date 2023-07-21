import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente,{action as nuevoClienteAction} from './paginas/NuevoCliente'
import Index,{loader as clientesLoader} from './paginas/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente,{loader as editarClienteLoader,action as editarClienteAction} from './paginas/EditarCliente'
import {action as eliminarClienteAction} from './components/Cliente'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<Index/>,
        loader: clientesLoader, 
        errorElement: <ErrorPage/>        
      },
      {
        path:'/cliente/nuevo',
        element:<NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/cliente/:clienteId/editar',
        element:<EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>

      },
      {
        path:'/cliente/:clienteId/eliminar',
        action: eliminarClienteAction


      }


    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

   
  </React.StrictMode>,
)
