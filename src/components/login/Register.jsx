import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineMail, AiFillCalendar } from "react-icons/ai";
import { RiLockUnlockFill } from "react-icons/ri";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { ImMobile } from "react-icons/im"
import { HiOutlineIdentification } from "react-icons/hi2"
import { Link } from "react-router-dom"; 

export const Register = () => {
  return (
    <div className="bg-secondary h-[100vh]">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Complete el formulario de registro:
          </p>
          <form className="mt-6">
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nombre y Apellido"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <BsFillPencilFill />
              </div>
            </div>   
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <AiOutlineMail />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="DNI/CUIT"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <HiOutlineIdentification />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Domicilio"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <BsFillHouseDoorFill />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Edad"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <AiFillCalendar />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Teléfono"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <ImMobile />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Contraseña"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <RiLockUnlockFill />
              </div>
            </div>
            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label className="text-sm" htmlFor="remember" />
              <p>Estoy de acuerdo con la política de privacidad</p>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Link to="/login">
                <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-secondary border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mx-auto mb-2">
                  Volver
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
