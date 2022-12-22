import * as React from 'react';

import { slugify } from '@/lib/slugify';
type Props = {
  list: Record<string, string[]>;
};
function CategoryNavList({ list }: Props) {
  return (
    <div className='absolute top-[60px] grid origin-top-left scale-0 grid-cols-3 grid-rows-2 border-b-2 border-b-coral bg-white px-4 py-2 shadow-lg transition duration-500 ease-out group-hover:scale-100'>
      {Object.entries(list).map(([category, linkArray]) => (
        <div className='mx-4 w-[240px]' key={category}>
          <p className='border-b border-b-lighter-grey py-2.5 text-sm font-medium text-black'>
            {category}
          </p>
          <div className='flex flex-col'>
            {linkArray.map((link) => (
              <a
                className='py-1 text-sm font-medium normal-case text-light-grey hover:text-coral'
                key={link}
                href={`/product/view/${slugify(link)}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryNavList;
