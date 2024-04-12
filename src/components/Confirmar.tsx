import Footer from './Footer'
import ProgressBar from './ProgressBar'

export default function Confirmar(props:any) {
    const {service, date, hour} = props
  return (
    <>
    <div className='h-screen flex flex-col justify-between'>
        <div>
          <div>
          <ProgressBar label="Confirmar turno" progress={90}/>  
            </div>
            <div className='border border-gray-400 mt-3 p-3 text-gray-600'>
                <p>Servicio: {service?.name}</p>
                <p>Fecha: {date} {hour}</p>
            </div>  
        </div>
        <div>
            <div className='flex flex-row justify-around'>
                <button className='bg-gray-400 p-2 text-white'>Anterior</button>
                <button className='bg-gray-400 p-2 text-white'>Confirmar</button>
            </div>
            <div className='flex flex-col'>
            <hr className='border border-gray-400 mt-3'/>
                <div className='flex flex-row justify-around mt-3'>
                    <Footer label="Reservar" color="bg-purple-400"/>
                    <Footer label="Mis turnos" color="bg-gray-600"/>
                </div>
            </div>  
        </div>
   
    </div>
       
    </>
  )
}
