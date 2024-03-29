import React from 'react';

import { CategoryTree } from '@/components/CategoryTree';

import { MobNavData } from './NavContents';

type MobileNavBarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function MobileNavBar({ setOpen }: MobileNavBarProps) {
  return (
    // mobile nav menu has plus icons that expand a category into individual items
    <div className='absolute z-100 h-full w-[350px] bg-white'>
      {/* menu title */}
      <div className='flex justify-between bg-coral py-2.5 px-5'>
        <p className='font-jost text-sm font-bold uppercase text-white'>Menu</p>
        <button onClick={() => setOpen(false)}>
          <svg
            className='h-5 w-5 fill-current text-white'
            viewBox='0 0 320 512'
          >
            <path
              stroke='fill-current'
              className='text-white'
              d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z'
            />
          </svg>
        </button>
      </div>
      <ul className='py-2.5 px-5'>
        {Object.entries(MobNavData).map(([k, v]) => {
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

export { MobileNavBar };
