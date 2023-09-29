import React from 'react'
type Props = {
  active: boolean
}
export function ListIcon({active}:Props) {
  return (
    <svg className="fill-current text-inherit" width="16" height="16" viewBox="2 2 20 20">
      <path className={`${active ? 'stroke-white' : 'stroke-inherit'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 6 13 .001m-13 6h13m-13 6h13M3.5 6h.01m-.01 6h.01m-.01 6h.01M4 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>
  )
}