import title from '../../assets/imgs/title.jpg'

export const Title = () => {
  return (
    <section className="xl:max-h-[calc(100vh-650px)] w-full bg-white xl:min-h-[300px]">
        <div className="flex flex-col md:flex md:flex-row p-6 items-center md:px-20">
            <div className='text-[40px] font-bold md:text[46px] xl:text-[58px] md:w-[40%] leading-none text-secondary'>
                <h1>Transportes automotor general sarmiento</h1>
            </div>
            <div className='text-[24px] mt-6 font-bold md:text-[32px] xl:text-[45px] md:ml-12 md:w-[40%] leading-none text-gray-600'>
                <p>Seguridad, velocidad <span className='md:hidden'>y precios</span></p>
                <span className='hidden md:inline'>y precios</span>
            </div>
            <div>
                <img className="justify-end md:min-w-[280px] h-[230px] object-cover mt-3"src={title} alt="Micro Larga Distancia" />
            </div>
        </div>
    </section>
  )
}
