

export default function Turnos(props:any) {
  const {hour, selectTurno, onChangeTurno} = props
  
  const handleSelected = (hour:string) =>{
   onChangeTurno(hour)
  }

  return (
    <>
    <div onClick={() => handleSelected(hour)} className={`m-2 p-3 w-36 flex items-center justify-center ${selectTurno ? "bg-gray-400" : "bg-gray-200"} text-gray-600 rounded-md`}>
       {hour}
    </div> 
    </>
  )
}
