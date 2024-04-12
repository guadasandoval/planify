import { useState } from "react";

export interface Service {
    id: string;
    name: string;
    description: string;  
  }

type Props = {
    service: Service;
    isSelected: boolean;
    onSelectionChange: any;
}



const Category = (props: Props) => {
    const {service, isSelected, onSelectionChange} = props
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleSeleccion = () =>{
    const newSelectedState = !isSelected;
        onSelectionChange(newSelectedState);
    }

    return(
    <>
    <div className='w-full justify-between flex flex-col'>
        <div className='w-full bg-gray-200 p-2 my-3 justify-between flex flex-row'>
            <h2 className="text-gray-600">{service.name}</h2>
            <button className="font-bold text-gray-600" onClick={() => setIsWindowOpen(!isWindowOpen)}>+</button>   
        </div>
        <div>
             {isWindowOpen && (
                        <div className="block flex-col border border-gray-400 p-2 justify-between">
                            <h3 className="text-gray-600">{service.description}</h3>
                            <button className="bg-gray-400 text-white p-2" 
                            onClick={handleSeleccion}
                            style={{ backgroundColor: isSelected ? 'bg-gray-800' : ''}}
                            >{isSelected ? 'Seleccionado' : 'Seleccionar'}</button>
                        </div>
                    )}
        </div>           
    </div>
    </>
    )
}

export default Category;