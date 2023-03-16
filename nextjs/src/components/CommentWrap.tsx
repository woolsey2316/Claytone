import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode;
}
function CommentWrap({children}: Props) {
  return ( 
  <div className="bg-nearWhite rounded-md">
    {children}
  </div> );
}

export default CommentWrap;