import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineMail, AiFillCalendar } from "react-icons/ai";
import { RiLockUnlockFill } from "react-icons/ri";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { ImMobile } from "react-icons/im"
import { HiOutlineIdentification } from "react-icons/hi2"
import { useState } from "react";
import { Tooltip } from "../accesories/Tooltip";
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom"; 

export const Register = () => {
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorDni, setErrorDni] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [errorAge, setErrorAge] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorTel, setErrorTel] = useState('');
  const [formularioValido, setFormularioValido] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Validar el input de nombre usando la expresión regular
    const nombreRegex = /^[a-zA-Z\s]+$/;
  
    // Validar el input del DNI usando la expresión regular
    const dniRegex = /^(?!00000000)\d{8}$/;

    // Validad el input del main usando la expresion regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,5}$/;

    const edadRegex = /^(1[89]|[2-9]\d)$/gm;

    const passwordRegex = /^(?=.*[a-zA-Z]{6,})(?=.*\d).{7,}$/;

    const telefonoRegex = /^(\d{1,2}\s?\d{4}\s?\d{4})$/;
  
  if( name === "nameInput"){
    if (nombreRegex.test(value)) {

      setName(value);
      setErrorName('');
    } else {

      setName(value);
      setErrorName('El nombre debe contener solo letras y espacios.');
    }
  }
  if ( name === "dniCuit" ){
    if (dniRegex.test(value)) {

      setDni(value);
      setErrorDni('');
    } else {

      setDni(value);
      setErrorDni('El DNI debe tener exactamente 8 dígitos.');
    }
  }

  if ( name === "emailInput" ){
    if (emailRegex.test(value)) {
      setEmail(value);
      setErrorMail('');
    } else {
      setEmail(value);
      setErrorMail('El email debe tener un formato válido)');
    }
  }
  if ( name === "ageInput" ){
    if (edadRegex.test(value)) {
      setAge(value);
      setErrorAge('');
    } else {
      setAge(value);
      setErrorAge('La edad debe ser entre 0 y 99)');
    }
  }
  if ( name === "passwordInput" ){
    if (passwordRegex.test(value)) {
      setPassword(value);
      setErrorPassword('');
    } else {
      setPassword(value);
      setErrorPassword('La contraseña debe tener mínimo 7 carácteres y un número');
    }
  }
  if (name === "telInput"){
    if (telefonoRegex.test(value)) {
      setTel(value);
      setErrorTel('');
    } else {
      setTel(value);
      setErrorTel('El teléfono debe ser del formato XX XXXX XXXX o XXXXXXXXXX');
    }
  }
  if (nombreRegex.test(name) && dniRegex.test(dni) && emailRegex.test(email) && edadRegex.test(age) && passwordRegex.test(password) && telefonoRegex.test(tel)) {
    setFormularioValido(true);
  } else {
    setFormularioValido(false);
  }
};

  return (
    <div className="bg-secondary h-[100vh]">
      <div className="p-8 lg:w-1/2 mx-auto">
      <div className="bg-white rounded-t-lg p-8">
          <Link to="/login">
            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-secondary border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mx-auto mb-2">
              Volver
            </button>
          </Link>
        </div>
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Complete el formulario de registro:
          </p>
          <form className="mt-6">
            <div className="relative">
              <input
                className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
                  errorName ? 'border-red-500' : ''
                }`}
                id="nameInput"
                type="text"
                required="required"
                placeholder="Nombre y Apellido"
                name="nameInput"
                value={name}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <BsFillPencilFill />
              </div>
              {errorName && <Tooltip message={errorName}/>} 
            </div>   



            <div className="relative mt-3">
              <input
                className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
                  errorMail ? 'border-red-500' : ''
                }`}
                id="emailInput"
                name="emailInput"
                type="email"
                required="required"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <AiOutlineMail />
              </div>
              {errorMail && <Tooltip message={errorMail}/>} 
            </div>



            <div className="relative mt-3">
              <input
                className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
                  errorDni ? 'border-red-500' : ''
                }`}
                id="dniCuit"
                name="dniCuit"
                type="number"
                placeholder="DNI/CUIT"
                required="required"
                value={dni}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <HiOutlineIdentification />
              </div>
              {errorDni && <Tooltip message={errorDni}/>} 
            </div>


            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="street"
                type="text"
                placeholder="Domicilio"
                required="required"
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <BsFillHouseDoorFill />
              </div>
            </div>




            <div className="relative mt-3">
              <input
                className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
                  errorAge ? 'border-red-500' : ''
                }`}

                id="age"
                type="number"
                placeholder="Edad"
                required="required"
                name="ageInput"
                value={age}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <AiFillCalendar />
              </div>
                {errorAge && <Tooltip className='w-[50px]' message={errorAge}/>} 
            </div>



            <div className="relative mt-3">
              <input
                className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
                  errorTel ? 'border-red-500' : ''
                }`}
                id="cellphone"
                type="tel"
                placeholder="Teléfono"
                required="required"
                name = "telInput"
                value={tel}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <ImMobile />
              </div>
              {errorTel && <Tooltip className='w-[50px]' message={errorTel}/>} 
            </div>


            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                required="required"
                name="passwordInput"
                value={password}
                onChange={handleInputChange}
              />
              <div className="absolute p-4 inset-y-0 flex items-center text-gray-600">
                <RiLockUnlockFill />
              </div>
              {errorPassword && <Tooltip className='w-[50px]' message={errorPassword}/>} 
            </div>



            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
                required="required"
              />
              <label className="text-sm" htmlFor="remember" />
              <p>Estoy de acuerdo con la política de privacidad</p>
            </div>

            <div className="flex items-center justify-center mt-8">
                <button className={`flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-secondary border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mx-auto mb-2  ${formularioValido ? 'enabled:bg-secondary enabled:text-white' : "disabled:opacity-50" }`}
                type="submit"
                disabled={!formularioValido}>
                  Registrarse
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
