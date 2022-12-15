import React from 'react';
type Props = {
  children: string;
};
function FancyLink({ children }: Props) {
  return (
    <a className='lg:text-md relative cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase hover:bg-black hover:text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0'>
      {children}
    </a>
  );
}

export default FancyLink;
