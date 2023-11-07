import { BsPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Tooltip } from "../accesories/Tooltip";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [cityExit, setCityExit] = useState("");
  const [cityDestination, setCityDestination] = useState("");
  const [errorExitCity, setErrorCityExit] = useState("");
  const [errorDestinationCity, setErrorCityDestination] = useState("");

  const [fechaRegresoOpcional, setFechaRegresoOpcional] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const cityRegex = /^[a-zA-Z\s]+$/;

    if (name === "cityExit") {
      if (cityRegex.test(value)) {
        // El nombre es válido, actualizar el estado y borrar el mensaje de error
        setCityExit(value);
        setErrorCityExit("");
      } else {
        // El nombre no es válido, mostrar un mensaje de error
        setCityExit(value);
        setErrorCityExit("La ciudad debe contener solo letras y espacios.");
      }
    }
    if (name === "cityDestination") {
      if (cityRegex.test(value)) {
        // El nombre es válido, actualizar el estado y borrar el mensaje de error
        setCityDestination(value);
        setErrorCityDestination("");
      } else {
        // El nombre no es válido, mostrar un mensaje de error
        setCityDestination(value);
        setErrorCityDestination(
          "La ciudad debe contener solo letras y espacios."
        );
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[600px] bg-gradient-to-r from-cyan-500 to-blue-500">
      <form action="">
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed  bg-[hsla(0,0%,0%,0.5)] flex">
          <div className="container m-auto flex justify-center items-center p-2 md:p-0">
            <div className="border border-secondary p-6 grid grid-cols-1 gap-3  bg-white shadow-lg rounded-lg">
              <h1 className="text-[18px] font-bold text-secondary">
                Reserva tus pasajes:
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-secondary p-2 rounded w-100">
                  <div>
                    <div className="flex border border-secondary rounded bg-white items-center p-2">
                      <FaLocationDot className="fill-current text-secondary mr-2 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Ingrese Salida"
                        className="bg-white max-w-full focus:outline-none text-secondary"
                        name="cityExit"
                        value={cityExit}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      {" "}
                      {errorExitCity && (
                        <Tooltip message={errorExitCity} />
                      )}{" "}
                    </div>
                  </div>
                  <div>
                    <div className="flex border rounded border-secondary bg-white items-center p-2 ">
                      <FaLocationDot className="fill-current text-secondary mr-2 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Ingrese Destino"
                        className="bg-white max-w-full focus:outline-none text-black"
                        name="cityDestination"
                        value={cityDestination}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      {errorDestinationCity && (
                        <Tooltip message={errorDestinationCity} />
                      )}{" "}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 border border-secondary p-2 rounded w-100">
                  <div>
                    <p className="font-bold md:hidden text-secondary">
                      Fecha Salida:
                    </p>
                    <p className="hidden md:font-bold md:block text-secondary">
                      Seleccione su fecha de salida:
                    </p>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      label="Salida"
                    >
                      <DatePicker format="DD/MM/YYYY"/>
                    </LocalizationProvider>
                    <div className="flex items-center space-x-2  py-2">
                    <input
                         type="checkbox"
                          checked={fechaRegresoOpcional}
                        onChange={() => setFechaRegresoOpcional(!fechaRegresoOpcional)}
                        />
                        <label>Solo ida</label>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold md:hidden text-secondary">
                      Fecha Regreso:
                    </p>
                    <p className="hidden md:font-bold md:block  text-secondary">
                      Seleccione su fecha de regreso:
                    </p>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      label="Destino"
                    >
                      <DatePicker format="DD/MM/YYYY"  disabled={fechaRegresoOpcional}/>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mx-auto md:mx-0">
                <div className="pt-6 md:pt-0 flex">
                  <BsPeopleFill className=" text-secondary mr-2 w-[100%] h-[100%]" />
                  <select className="border p-2 rounded border-secondary">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="pt-6 md:pt-0 md:pl-6">
                  <select className="border p-2 rounded border-secondary">
                    <option>Cama</option>
                    <option>Semicama</option>
                    <option>Premium</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="  w-1/4  bg-white font-bold text-secondary  hover:text-white mt-2 md:mt-0"
                  type="submit"
                >
                  <Link
                    to="/search"
                    className="inline-block border rounded-md border-secondary w-[100%] h-[100%] p-2 hover:bg-semiBlack"
                  >
                    BUSCAR
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
