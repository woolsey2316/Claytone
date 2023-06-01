import React from 'react'

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean[]>>
  index: number;
}
function TriangleDown({setOpen, index}: Props) {
  return (
    <svg onClick={() => setOpen(open => [...open.slice(0, index), false, ...open.slice(index + 1, open.length)])} className="h-4 w-4 float-right inline-block" fill="#000000" version="1.1" id="Layer_1" viewBox="0 0 24 24">
    <path d="M6.5,8.5l6,7l6-7H6.5z"/>
      <rect className="fill-none" width="24" height="24"/>
      <rect className="fill-none" width="24" height="24"/>
    </svg>
   );
}

export default TriangleDown;