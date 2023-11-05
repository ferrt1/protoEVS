/* eslint-disable react/prop-types */ 
import { BsFillBusFrontFill } from "react-icons/bs";

export const Travels = ( { date, type, hourStart, terminalStart, provinceStart, hourArrival, terminalArrive,
     provinceArrive, price, people, chairs } ) => {
  return (
    <div className="p-3 md:p-10">
      <div className="max-w-[70%] mx-auto bg-white flex flex-col rounded overflow-hidden shadow-lg">
        <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
          <h1 className="ml-2 uppercase font-bold text-gray-500">Salida</h1>
          <p className="ml-2 font-normal text-gray-500">{ date }</p>
        </div>
        <div className="mt-2 flex justify-start bg-white p-2">
          <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
            <BsFillBusFrontFill />
            <p className="font-normal text-sm ml-1 text-gray-500">{ type }</p>
          </div>
        </div>
        <div className="mt-2 flex sm:flex-row sm:justify-between flex-wrap pb-3 py-2">
            <div className="flex flex-col px-10">
              <p className="font-bold">Hora salida: {hourStart}</p>
              <p className="text-gray-500">
                <span className="font-bold">Terminal</span> {terminalStart}
              </p>
              <p className="text-gray-500">{provinceStart}</p>
            
          </div>
          <div className="flex flex-col px-10 mt-4 sm:mt-0 md:mt-0">
            <p className="font-bold">Hora llegada: {hourArrival}</p>
            <p className="text-gray-500">
              <span className="font-bold">Terminal</span> {terminalArrive}
            </p>
            <p className="text-gray-500">{provinceArrive}</p>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
          <div className="flex pt-4 mx-6 md:py-4 flex-row flex-wrap"></div>
          <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row md:py-4 mr-8 flex-wrap">
            <div className="text-sm mx-2 md:mx-6 flex flex-col">
              <p className="pt-2">Precio</p>
              <p className="font-bold">${price}</p>
              <p className="text-xs text-gray-500">{people} persona/s</p>
              <p className="pb-2">Asientos disponibles: {chairs} </p>
            </div>
            <button className="mb-2 w-32 h-11 mt-4 rounded flex border-solid border text-white bg-secondary mx-2 justify-center place-items-center hover:bg-white hover:text-black">
              <div className="">Reservar</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
