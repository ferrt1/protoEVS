import { AdminHeader } from '../adminpage/AdminHeader';
import { Travels } from './Travels';

export const SearchTravels = () => {
  return (
    <>
     <AdminHeader />
     <Travels 
        date='Martes 7 Nov'
        type='Semicama'
        hourStart='18:25'
        terminalStart = 'Retiro'
        provinceStart = 'Buenos Aires'
        hourArrival = '02:25'
        terminalArrive = 'Bahia Blanca'
        provinceArrive = 'Buenos Aires'
        price = '36.000'
        people = '1'
        chairs={13}
     />
     <Travels
       date='Viernes 10 Nov'
       type='Cama'
       hourStart='14:25'
       terminalStart = 'San Miguel'
       provinceStart = 'Buenos Aires'
       hourArrival = '13:40'
       terminalArrive = 'Bariloche'
       provinceArrive = 'Rio Negro'
       price = '300.000'
       people = '2' 
       chairs={42}/>

     <Travels 
       date='Sab 2 Dic'
       type='Premium'
       hourStart='16:30'
       terminalStart = 'Grand Bourg'
       provinceStart = 'Buenos Aires'
       hourArrival = '22:00'
       terminalArrive = 'Alpa Corral'
       provinceArrive = 'Cordoba'
       price = '50.000'
       people = '1'
       chairs={35}/>
    </>
  )
}
