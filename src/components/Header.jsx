import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'


export default function Header() {
    
    const location = useLocation();
    const navigate = useNavigate();
    
    function pathMathRoute(route){
      if (route === location.pathname) {
        return true
      }
    }
  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                < img src= " " alt="GLOBAL ESTATE" className="h-5 cursor-pointer" onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                  border-b-transparent ${pathMathRoute("/home") && "text-black border-b-red-500"}`}
                  onClick={()=>navigate("/home")} >Inicio</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                  border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}
                  onClick={()=>navigate("/offers")} >Ofertas</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                  border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}
                  onClick={()=>navigate("/sign-in")} >Ingresar</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
