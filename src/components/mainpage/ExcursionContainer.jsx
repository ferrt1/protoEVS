import { Excursion } from "./Excursion"
import  img1  from '../../assets/imgs/excursions/cataratasIguazu.jpg'
import  img2  from '../../assets/imgs/excursions/ruta-del-vino.jpg'
import  img3  from '../../assets/imgs/excursions/perito-moreno.jpg'
import  img4  from '../../assets/imgs/excursions/la-boca.jpg'

export const ExcursionContainer = () => {
  return (
    <section className="mt-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary ">Algunas de nuestras excursiones</h2>
        <div className='grid grid-cols-1 gap-12 mt-10 xl:grid-cols-4 lg:grid-cols-2 px-12'>
        <Excursion
        image= {img1}
        title='Cataratas del Iguazú'
        description='Descubre las asombrosas Cataratas del Iguazú en Puerto Iguazú, Misiones. Un viaje emocionante a través de exuberantes selvas, emocionantes paseos en barco y vistas impresionantes de las cascadas más grandes de América del Sur.'
        price=''/>

        <Excursion 
        image={img2}
        title='Ruta del Vino en Mendoza'
        description='Embárcate en un viaje por las bodegas de Mendoza. Disfruta de catas de vino, aprende sobre el proceso de vinificación y maravíllate con los paisajes de viñedos y montañas de los Andes.'
        price=''/>

        <Excursion
        image={img3}
        title='Glaciar Perito Moreno'
        description='Explora el impresionante Glaciar Perito Moreno en El Calafate, Santa Cruz. Camina sobre el hielo en una emocionante excursión de trekking y observa cómo los bloques de hielo se desprenden y caen al Lago Argentino.'
        price=''/>

        <Excursion
        image={img4}
        title='Buenos Aires Histórica'
        description='Sumérgete en la rica historia de Buenos Aires. Explora la Ciudad Vieja, descubre la pasión del tango en San Telmo, maravíllate con la arquitectura europea en Recoleta y admira las coloridas casas de La Boca.'
        price=''/>
        </div >
     
    </section>
  )
}
