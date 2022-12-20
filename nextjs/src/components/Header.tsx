import React from 'react'

import { NavBar } from '@/components/nav/NavBar';

function Header() {
  return ( 
      <div className="bg-header lg:h-205px xl:h-265px w-full">
        <NavBar></NavBar>
      </div>
   );
}

export default Header;