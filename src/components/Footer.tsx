/// <reference types="vite-plugin-svgr/client" />
import  CoffeeSvg from '../assets/coffee.svg?react';

export default function Footer(props: any) {
    const {label} = props
  return (
    <>
        <div className='flex flex-col items-center justify-center'>
            <CoffeeSvg className='w-10'/>
            <p>{label}</p>  
        </div>
    </>
  )
}
