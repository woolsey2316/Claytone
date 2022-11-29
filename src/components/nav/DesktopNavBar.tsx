import * as React from 'react';

import CategoryNavList from '@/components/nav/CategoryNavList';
import SimpleNavList from '@/components/nav/SimpleNavList';

import { DesktopNavData } from './NavContents';

function DesktopNavBar() {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex'>
        {Object.entries(DesktopNavData).map(([k, v]) => (
          <div className='group' key={k}>
            <li className='mx-5 py-5 font-medium uppercase hover:text-coral'>
              <a href={k}>
                {k}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {v !== null ? (
                  Array.isArray(v) ? (
                    <SimpleNavList list={v} />
                  ) : (
                    <CategoryNavList list={v} />
                  )
                ) : null}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavBar;
