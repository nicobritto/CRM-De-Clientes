import {useLoaderData} from 'react-router-dom';
import Cliente from '../components/Cliente';
import {obtenerClientes} from '../data/clientes'

export function loader () {
  // para ejecutar la base de datos : json-server --watch db.json se ejecuta localmente con JSON Server
  // y es el archivo que se llama db.json
  const clientes=obtenerClientes()

  return  clientes
}


const Index = () => {

  const clientes=useLoaderData();//useLoaderData es parqa obtener lo que retorno en mis funciones loader que es la de arriba
 

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Cliente</h1>
    <p className="mt-3 ">Administra tus Clientes</p>

    {clientes.length ? (
       <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

            <tbody>
                {clientes.map( cliente=>(
                  <Cliente
                   cliente={cliente}
                   key={cliente.id}/>
                  ))}
            </tbody>

                  
       </table>) : (<p className='text-center mt-10'>no hay</p>)}
      
    </>
  )
}

export default Index  