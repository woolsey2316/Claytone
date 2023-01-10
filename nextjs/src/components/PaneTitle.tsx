import React from 'react'
type Props = {
  name: string;
  onclick: () => void;
  show: number;
  number: number;
}
function PaneTitle({name, onclick, show, number}: Props) {
  return ( 
    <li onClick={onclick} className="relative uppercase text-lg font-jost font-medium ">
      <p className={`cursor-pointer block hover:text-white before:empty-content before:absolute before:bottom-0 before:h-0.5 before:bg-white before:transform before:ease-in-out before:duration-700 hover:before:w-full py-[15px] ${show === number ? " text-white before:absolute before:bottom-0 before:h-0.5 before:w-full" : "before:w-0"}`}>{name}</p>
    </li> );
}

export default PaneTitle;