import React from 'react'
interface Props extends React.HTMLProps<HTMLAnchorElement> {
  text?: string
}
function AnimatedPinkbutton({text, ...props}:Props) {
  return ( 
    <a {...props} className='lg:text-md relative inline-block cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase text-white hover:bg-black before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0'>
      {text}
    </a>
   );
}

export default AnimatedPinkbutton;