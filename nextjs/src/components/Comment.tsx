import { useMutation, useQuery } from '@apollo/client';
import React, { useRef, useState } from 'react'

import { replyToComment } from '@/graphql/mutation/reply-to-comment';
import { GET_REPLIES } from '@/graphql/query/replies.query';
import { mapReplyDataToInterface } from '@/util/mapReplyDataToInterface';

import { IComment, InputComment } from '../../../common/comment.type';

interface Props {
  comment: IComment;
}
interface FormElements extends HTMLFormControlsCollection {
  replyInput: HTMLInputElement
}
interface ReplyFormElement extends HTMLFormElement {
  readonly elements: FormElements
}
function Comment({comment}: Props) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replytoComment, { data, loading, error }] = useMutation(replyToComment)
  const { data: replies } = useQuery(GET_REPLIES, {
    variables: { commentId: comment._id },
  })
  const repliesData = replies?.replies?.map(comment => mapReplyDataToInterface(comment))
  const replyToComment_ = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = (event: React.FormEvent<ReplyFormElement>) => {
    event.preventDefault();
    // If comment not null
    if (replyToComment_.current?.value != null) {
      const reply: InputComment = {
        user: "wools",
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        comment: replyToComment_.current.value,
        blogpostId: "63fd9561993ed610db92382d",
        parentCommentId: comment._id
      }
      console.log(reply)
      replytoComment({variables: { reply: reply }})
    }
  }
  return ( 
    <div className="bg-nearWhite text-grey2 first:mt-0 first:pt-5 p-5 pt-5 border-t border-grey3 border-l">
      <div className="bg-white w-15 h-15 rounded-full leading-[60px] text-center inline-block float-left mr-[21px] mb-2">
        <svg className="fill-current text-coral w-6 h-6 mx-auto mt-4" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M0 0h24v24H0z"/><path fillRule="evenodd" d="M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8ZM5.43 16.902C7.057 16.223 9.224 16 12 16c2.771 0 4.935.22 6.559.898 1.742.727 2.812 1.963 3.382 3.76A1.03 1.03 0 0 1 20.959 22H3.035c-.69 0-1.188-.67-.978-1.335.568-1.797 1.634-3.033 3.374-3.762Z" clipRule="evenodd"/></svg>
      </div>
      {/* Comment Info */}
      <div>
        <div>
          {/* user name */}
          <div className="font-medium text-black2">{comment.user}</div>
          {/* time of comment */}
          <div className="mt-[5px] mb-2 text-sm">{new Date(parseInt(comment.createdAt)).toLocaleDateString("en-US")}</div>
        </div>
        <p>{comment.comment}</p>
        {/* reply */}
        <button className="cursor-pointer flex gap-2 items-center" onClick={() => setShowReplyForm(bool => !bool)}>
          <svg className="w-5 h-5" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
          <span>reply</span>
        </button>
        {showReplyForm &&
          <form className="mt-1" onSubmit={handleSubmit}>
            <textarea className="w-full py-2 px-3 mb-2 h-20" ref={replyToComment_}></textarea>
            <button type="submit" className="bg-coral py-[5px] px-[15px] text-sm text-white cursor-pointer inline-block rounded-[5px]">Reply</button>
          </form>
        }
        {repliesData && 
          <div className="p-5">
            {repliesData.map((reply: IComment, index: number) => {if (reply) return <Comment key={index} comment={reply}></Comment>})}
          </div>
        }
      </div>
    </div>
   );
}

export default Comment;