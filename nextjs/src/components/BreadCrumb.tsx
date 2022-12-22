import React, { useEffect, useState } from 'react'

import { deSlugify } from '@/lib/slugify';

function BreadCrumb() {
  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(window.location.pathname.split("/").pop() ?? "")

  },[])
  // finds the url link from a given URL section, eg. grades => /student/grades
  return (
    <div className="mx-auto flex justify-center items-center center mb-[15px] h-[50px]">        
      <a href="/" className="font-medium mr-3">
        Home
      </a>
      /
      <p className="text-coral font-medium ml-3">
        {deSlugify(path)}
      </p>
    </div>
  );
}

export default BreadCrumb;