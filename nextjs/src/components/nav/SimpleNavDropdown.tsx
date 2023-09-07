import * as React from 'react';
type Props = {
  list: string[];
};
/* A basic nav list accepting an array of links.
 */
function SimpleNavDropdown({ list }: Props) {
  return (
    <div className='absolute top-10 mt-5 origin-top-left scale-0 flex-col border-b-2 border-b-coral bg-white p-4 shadow-xl transition duration-500 ease-out group-hover:flex group-hover:scale-100'>
      {list.map((link) => (
        <a
          className='py-2 text-sm normal-case text-grey2 first:pt-0 last:pb-0 hover:text-coral'
          key={link}
          href={link}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default SimpleNavDropdown;
