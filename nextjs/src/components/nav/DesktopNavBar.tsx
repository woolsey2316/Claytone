import * as React from 'react';

import ComplexNavDropdown from '@/components/nav/ComplexNavDropdown';
import SimpleNavDropdown from '@/components/nav/SimpleNavDropdown';

import { DesktopNavData } from './NavContents';

function DesktopNavBar() {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex'>
        {Object.entries(DesktopNavData).map(([navLink, navLinkcollection]) => (
          <div className='group' key={navLink}>
            <li className='mx-5 py-5 font-medium uppercase hover:text-coral'>
              <a className="whitespace-nowrap" href={"/" + navLink.toLowerCase()}>{navLink}</a>
              {navLinkcollection !== null ? (
                Array.isArray(navLinkcollection) ? (
                  <SimpleNavDropdown list={navLinkcollection} />
                ) : (
                  <ComplexNavDropdown list={navLinkcollection} />
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
