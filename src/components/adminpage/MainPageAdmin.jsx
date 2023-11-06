

export const MainPageAdmin = () => {
  return (
    <main>
        <h1 className="text-center text-[36px] mt-12 leading-none text-secondary font-bold">Bienvenido a la vista administrador</h1>
        <h2 className="text-center text-[28px] mt-6 leading-none text-secondary font-bold">Aqui podra administrar excursiones/viajes</h2>
        <div className="flex flex-col md:p-8 p-2 my-20 bg-white items-center ">
            <div className="border text-secondary text-[21px] border-gray-950 rounded-xl w-[300px] md:w-[450px] p-24 hover:cursor-pointer hover:bg-secondary hover:text-white">
                <h4 className="text-center font-bold">Administrar excursiones</h4>
            </div>
            <div className="border text-secondary text-[21px] border-gray-950 rounded-xl w-[300px] md:w-[450px] p-24 mt-12 hover:cursor-pointer hover:bg-secondary hover:text-white">
                <h4 className="text-center font-bold ">Administrar viajes</h4>
            </div>
        </div>
    </main>
  )
}
