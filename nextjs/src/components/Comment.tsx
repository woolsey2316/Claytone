import React, { MouseEventHandler, useRef } from 'react'

import { IReply } from '../../../common/reply.type';

interface Props {
  name: string;
  date: string;
  comment: string;
  reply: (reply: IReply) => MouseEventHandler<HTMLButtonElement>;
}
interface FormElements extends HTMLFormControlsCollection {
  replyInput: HTMLInputElement
}
interface ReplyFormElement extends HTMLFormElement {
  readonly elements: FormElements
}
function Comment({name, date, comment, reply}: Props) {
  const replyToComment_ = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent<ReplyFormElement>) => {
    event.preventDefault();
    // If comment not null
    if (replyToComment_.current?.value != null) {
      const replyToComment: IReply = {
        user: {username: "wools", password: "wools"},
        createdAt: new Date(),
        updatedAt: new Date(),
        comment: replyToComment_.current.value,
        blogpostId: "63fd9561993ed610db92382d",
        parentCommentId: "6405640444e55d2f387d9073"
      }
      reply(replyToComment)
    }
  }
  return ( 
    <div className="bg-nearWhite text-grey2">
      <div className="bg-white w-15 h-15 rounded-full leading-[60px] text-center inline-block float-left mr-[21px] mb-2">
        <svg className="fill-current text-coral w-6 h-6 mx-auto mt-4" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M0 0h24v24H0z"/><path fill-rule="evenodd" d="M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8ZM5.43 16.902C7.057 16.223 9.224 16 12 16c2.771 0 4.935.22 6.559.898 1.742.727 2.812 1.963 3.382 3.76A1.03 1.03 0 0 1 20.959 22H3.035c-.69 0-1.188-.67-.978-1.335.568-1.797 1.634-3.033 3.374-3.762Z" clip-rule="evenodd"/></svg>
      </div>
      {/* Comment Info */}
      <div>
        <div>
          {/* user name */}
          <div className="font-medium text-black2">{name}</div>
          {/* time of comment */}
          <div className="mt-[5px] mb-2 text-sm">{new Date(parseInt(date)).toLocaleDateString("en-US")}</div>
        </div>
        <p>{comment}</p>
        {/* reply */}
        <form onSubmit={handleSubmit}>
          <input ref={replyToComment_}></input>
          <button type="submit" className="bg-coral py-[5px] px-[15px] text-sm text-white cursor-pointer inline-block rounded-[5px]">Reply</button>
        </form>
      </div>
    </div>
   );
}

export default Comment;