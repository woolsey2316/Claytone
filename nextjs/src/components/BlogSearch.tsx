import React from 'react'

import { CategoryTree } from '@/components/CategoryTree';
import { BlogNavData } from '@/components/nav/NavContents'

function BlogSearch() {
  return ( 
    <div className="mb-30px">
      <h3 className="py-[15px] px-5 text-lg text-left uppercase relative font-medium leading-5 rounded-t bg-coral text-white">Categories</h3>
      <ul className="py-30px px-5 rounded-b bg-nearWhite list-none">
        {Object.entries(BlogNavData).map(([k, v]) => {
          return (
            <CategoryTree
              key={k}
              category={k}
              subCategories={v}
              calls={0}
            ></CategoryTree>
          );
        })}
      </ul>
    </div>
   );
}

export default BlogSearch;