import React, { useEffect, useState } from 'react'

import { deSlugify } from '@/lib/slugify';

function BreadCrumb() {
  const [links, setLinks] = useState<string[]>([""])
  useEffect(() => {
    setLinks(window.location.pathname.split("/"))
  },[])
  // finds the url link from a given URL section, eg. grades => /student/grades
  return (
    <div className="bg-nearWhite mx-auto flex justify-center items-center center mb-[15px] h-[50px]">        
      <a href="/" className="font-medium mr-3">
        Home
      </a>
      {
        links.filter(link => link).map((link, index) => <span key={index}>
          <span>/</span>
          <span className="text-coral font-medium ml-3 mr-3">
            {deSlugify(link)}
          </span>
        </span>)
      }
      
    </div>
  );
}

export default BreadCrumb;