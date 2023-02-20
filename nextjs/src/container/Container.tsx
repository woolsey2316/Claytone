import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode[] | ReactNode
}
function Container({children}: Props) {
  return ( 
    <div className="px-[15px] mx-auto md:w-4xl large:w-5xl xlarge:w-6xl 2xlarge:w-7xl">
      <div className="mx-[-15px] flex flex-wrap">
        {children}
      </div>
    </div>
   );
}

export default Container;