import * as React from 'react';

import CategoryNavList from '@/components/nav/CategoryNavList';
import SimpleNavList from '@/components/nav/SimpleNavList';

import { DesktopNavData } from './NavContents';

function DesktopNavBar() {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex'>
        {Object.entries(DesktopNavData).map(([navLink, navLinkcollection]) => (
          <div className='group' key={navLink}>
            <li className='mx-5 py-5 font-medium uppercase hover:text-coral'>
              <a className="whitespace-nowrap" href={"/" + navLink}>{navLink}</a>
              {navLinkcollection !== null ? (
                Array.isArray(navLinkcollection) ? (
                  <SimpleNavList list={navLinkcollection} />
                ) : (
                  <CategoryNavList list={navLinkcollection} />
                )
              ) : null}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavBar;
