import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode;
}
function CommentWrap({children}: Props) {
  return ( 
  <div className="first:mt-0 first:pt-0 first:border-none mt-5 pt-5 border-t border-grey3 bg-nearWhite rounded-md">
    {children}
  </div> );
}

export default CommentWrap;