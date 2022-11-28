import Image from 'next/image';
import React from 'react';

import { MobileNavCategory } from './MobileNavCategory';

function MobileNavBar() {
  const navContents = {
    Home: null,
    Shop: {
      'Handmade Pottery': {
        Creamer: null,
        Pitcher: null,
        'Sake Shot Glass': null,
      },
      'Khurja Pottery': {
        'Casserole Dish': null,
        'Garlic Keeper': null,
        'Toothbrush Holder': null,
      },
      Porcelain: {
        'Prep Bowl': null,
        'Terracotta Pots': null,
        Tumbler: null,
      },
      Stoneware: { Canister: null, 'Coaster Set': null, 'Wine Chiller': null },
      Earthenware: { 'Coffee Mug': null, 'Water Pot': null, 'Handi Pot': null },
    },
    'Ceramic Pots': { 'Football Cermaic Pot': null, 'Railing Planters': null },
    Pottery: {
      'Illuminated Vase': {
        'Golfer Coffee Mug': null,
        'Wall Pocket': null,
      },
    },
    Bricks: null,
    Tiles: null,
    'Earthen Wear': null,
    Products: null,
    Blogs: null,
  };
  return (
    // mobile nav menu has plus icons that expand a category into individual items
    <div className='absolute h-full bg-white'>
      {/* menu title */}
      <div className='flex'>
        <p className='uppercase'>Menu</p>
        <button>
          <Image
            src='/images/close.svg'
            alt='close'
            width={5}
            height={5}
          ></Image>
        </button>
      </div>
      <ul>
        {Object.entries(navContents).map(([k, v]) => {
          return (
            <MobileNavCategory
              key={k}
              category={k}
              subCategories={v}
            ></MobileNavCategory>
          );
        })}
      </ul>
    </div>
  );
}

export { MobileNavBar };
