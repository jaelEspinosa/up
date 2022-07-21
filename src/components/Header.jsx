import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import '../styles/input.css'

const Header = () => {
    const navigate = useNavigate()
    const { setProyectos, proyectos } = useProyectos()
    const [busqueda, setBusqueda] = useState('')
    console.log('estos son los proyectos que hay', proyectos)
    const proyectosFiltrados = proyectos.filter(proyecto => proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const logOut = () => {
        localStorage.clear()

        navigate('/')
    }
    return (
        <header className="px-4 py-5 bg-white border-b relative">
            <div className="flex-column items-center justify-center md:flex md:justify-between">
                <h2 className="text-4xl text-sky-600 font-black text-center mb-5">
                    UpTask
                </h2>
                <div>
                <div className="flex items-center gap-1">
                <div className="w-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                   
                    <input
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                        type='search'
                        placeholder="Buscar proyecto"
                        className="rounded-lg w-full my-4 md:w-96 block p-2 px-10 border outline-sky-600 "
                    />
                   </div>
                    {busqueda && (
                      <div className="border-3 relative bg-red-400 w-full">
                        <div className="resultado w-11/12 md:w-96 rounded-md px-10 overflow-y-scroll scrollbar-thumb-transparent scrollbar-thin hover:scrollbar-thumb-sky-700 scrollbar-thumb-rounded-full shadow border">
                            {proyectosFiltrados.map(proyect => (
                                <p 
                                key={proyect._id}
                                onClick={()=>{window.location =`/proyectos/${proyect._id}`}}
                                className="hover:cursor-pointer hover:bg-sky-600 rounded-md px-5">{proyect.nombre}</p>
                            ))}
                        </div>
                        </div> 
                    )}

                    </div>


                <div className="flex flex-col md:flex-row items-center gap-5">

                    <Link
                        to='/proyectos'
                        className="font-bold uppercase"
                    >proyectos</Link>
                    <button
                        type="button"
                        className="rounded-xl bg-sky-600 hover:bg-sky-700 
                                     transition-colors cursor-pointer text-white font-bold py-2 px-3"
                        onClick={() => logOut()}
                    >Cerrar Sesión</button>
                </div>
            </div>


        </header>
    )
}

export default Header