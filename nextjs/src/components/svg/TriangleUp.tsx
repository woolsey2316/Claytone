import React from 'react'

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean[]>>
  index: number
}

function TriangleUp({setOpen, index}: Props) {
  return (
    <svg onClick={() => setOpen(open => [...open.slice(0, index), true, ...open.slice(index + 1, open.length)])} className="h-4 w-4 float-right inline-block" fill="#000000" viewBox="0 0 24 24">
      <path d="M18.5,15.5l-6-7l-6,7H18.5z"/>
      <rect className="fill-none" width="24" height="24"/>
      <rect className="fill-none" width="24" height="24"/>
    </svg>
   );
}

export default TriangleUp;