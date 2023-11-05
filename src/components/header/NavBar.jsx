import { useState } from "react"
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <ul className={`fixed bg-white w-[80%] h-full font-bold flex-1 flex flex-col items-center justify-center gap-10 ${showMenu ? "left-0" : "-left-full"}
                  md:flex md:w-full md:h-full md:flex-row md:gap-0 md:static md:items-center md:justify-end md:[&>li>a]:px-5 md:[&>li>a]:font-medium md:[&>li>a]:text-[16px] md:mr-16 md:[&>li>a]:inline-block`}>
        <li><Link className="hover:text-secondary" to="/#aboutus">Sobre Nosotros</Link></li>
        <li><Link className="hover:text-secondary" to="/#contact">Contacto</Link></li>
        {/* <li><a className="hover:text-secondary" href="">Accesorios</a></li> */}
        <li><Link className="hover:text-secondary" to="login">Iniciar sesión</Link></li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list items-center w-11 h-full inline-block cursor-pointer md:hidden transition-all duration-500" onClick={ () => setShowMenu(!showMenu)} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    </>
  )
}