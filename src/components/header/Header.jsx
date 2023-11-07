import { Link } from "react-router-dom";
import { NavBar } from "./NavBar"
import { BsFillBusFrontFill } from 'react-icons/bs';

export const Header = () => {
    return (
        <header className="flex place-content-between md:items-center text-[17px] bg-white text-primary p-2 top-0 sticky z-50">
          <div className="flex relative font-bold text-[24px] pl-4">
            <Link className="hover:text-secondary" to="/"> <BsFillBusFrontFill className= "inline-block h-12 w-12" /> T.A.G.S. </Link>
          </div>
          <NavBar />
      </header>
   
    )
}