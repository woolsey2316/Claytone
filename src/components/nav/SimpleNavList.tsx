import * as React from 'react';
type Props = {
  list: string[];
};
function SimpleNavList({ list }: Props) {
  return (
    <div className='absolute top-10 mt-5 origin-top-left scale-0 flex-col border-b-2 border-b-coral bg-white p-4 shadow-xl transition duration-500 ease-out group-hover:flex group-hover:scale-100'>
      {list.map((link) => (
        <a
          className='py-2 text-sm normal-case text-light-grey first:pt-0 last:pb-0 hover:text-coral'
          key={link}
          href={link}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default SimpleNavList;
