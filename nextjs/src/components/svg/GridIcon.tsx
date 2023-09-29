import React from 'react'
type Props = {
  active: boolean
}
export function GridIcon({active}: Props) {
  return (
    <svg className={`fill-current text-inherit`} width="16" height="16" viewBox="0 -0.5 21 21">
      <path strokeWidth="0" fillRule="evenodd" d="M13.65 18h5.25v-5h-5.25v5Zm-2.1 2H21v-9h-9.45v9ZM2.1 18h5.25v-5H2.1v5ZM0 20h9.45v-9H0v9ZM13.65 7h5.25V2h-5.25v5Zm-2.1 2H21V0h-9.45v9ZM2.1 7h5.25V2H2.1v5ZM0 9h9.45V0H0v9Z"/>
    </svg>
  )
}