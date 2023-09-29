import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  active: boolean;
  children?: React.ReactNode;
}
function AnimatedWhiteIconbutton({ active, children, ...props}:Props) {
  return ( 
    <button {...props} className={`mr-2 stroke-black2 hover:stroke-white lg:text-md relative inline-block cursor-pointer overflow-hidden rounded ${active ? 'bg-coral text-white' : 'bg-white text-black2'} px-5 py-3 text-sm font-medium uppercase hover:text-white hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0`}>
      {children}
    </button>
   );
}

export default AnimatedWhiteIconbutton;