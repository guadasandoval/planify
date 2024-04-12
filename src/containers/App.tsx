import { useState, useEffect } from 'react'
import '../assets/App.css'
import Category, { Service } from '../components/Category'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import SelectHorario from '../components/SelectHorario'
import CategoriesServices from '../services/CategoriesServices'


function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  useEffect(() => {
    CategoriesServices
    .getAll()
    .then(response => setServices(response))
   }, [])

   const handleSelectionChange = (cat:Service) => {
    setIsSelected(!isSelected);
    setSelectedService(cat)
  };

  const handleClickSiguiente = () =>{
    setShowComponent(true)
  }

  return (
    <>
 {!showComponent ? (
  <div>
    <ProgressBar label="Seleccionar servicio" progress={50}/>
    <div className='w-full'>
      <h3 className="font-bold">Categorías</h3>
      {services.map((cat) => <Category key={cat.id} service={cat} isSelected={isSelected} onSelectionChange={()=>handleSelectionChange(cat)}/>)}
    </div>
    {isSelected && (
      <div>
        <hr />
        <div className='flex justify-end'>
          <button className="bg-gray-400 text-white p-2 my-2" onClick={handleClickSiguiente}>Siguiente</button>
        </div>
        </div>
    )}
    <div className='flex flex-col'>
      <hr className='border border-gray-400 mt-3'/>
      <div className='flex flex-row justify-around mt-3'>
        <Footer label="Reservar" color="bg-purple-400"/>
        <Footer label="Mis turnos" color="bg-gray-600"/>
    </div>
    </div>
    </div>
            ) : (
              <div>
                <SelectHorario selectedService={selectedService} />
              </div>
            )}
    </>
  )
}

export default App
