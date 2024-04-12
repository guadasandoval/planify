import { useEffect, useState } from 'react'
import CategoriesServices from '../services/CategoriesServices';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import Turnos from './Turnos';
import "../assets/App.css"
import Confirmar from './Confirmar';

export interface Slots{
    date: string;
    serviceId: number;
    availableTimeslots: string[]; 
}

export default function SelectHorario(props:any) {
    const {selectedService} = props
    const [slots, setSlots] = useState<Slots[]>([]);
    const [selectTurno, setSelectedTurno] = useState<string| null>(null)
    const [selectConfirmar, setConfirmar] = useState(false);

    useEffect(() => {
        CategoriesServices
        .getAllSlots()
        .then(response => setSlots(response))
       }, [])
    
    const onChangeTurno = (hour:string) =>{
        setSelectedTurno(prevSelectedTurno => prevSelectedTurno === hour ? null : hour);
    }
    const handleConfirmar = () =>{
        setConfirmar(!selectConfirmar)
      }
  return (
    <>
    {!selectConfirmar ? ( <div className='h-screen flex flex-col justify-between overflow-auto'>
        <div className='flex flex-col'>
            <ProgressBar label="Seleccionar horario" progress={75}/>    
                <div className='flex flex-col mb-3'>
                    <p className="font-bold text-gray-600">Próximos turnos disponibles</p>
                    <p className='text-gray-600'>{slots[0]?.date}</p>
                </div>   
                <div className='flex flex-wrap justify-between'>   
                    {slots[0]?.availableTimeslots.map(((hour, index) =>
                        <Turnos key={index} hour={hour} selectTurno={hour === selectTurno} onChangeTurno={onChangeTurno}/>
                    ))}  
                </div>
        </div>
    <div className='flex flex-col'>
        <div className='flex flex-row justify-around'>
            <button className='bg-gray-400 p-2 text-white'>Anterior</button>
            <button className='bg-gray-400 p-2 text-white' onClick={handleConfirmar}>{selectTurno ? 'Confirmar' : 'Siguiente'}</button>
        </div>
      <hr className='border border-gray-400 mt-3'/>
      <div className='flex flex-row justify-around mt-3'>
        <Footer label="Reservar" color="bg-purple-400"/>
        <Footer label="Mis turnos" color="bg-gray-600"/>
    </div>
    </div> 
    </div>) : (<Confirmar service={selectedService} date={slots[0].date} hour={selectTurno}/>)}
    </>
  )
}
