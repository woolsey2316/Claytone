import Image from 'next/image';
import React from 'react';

import BestSellers from '@/components/BestSellers';
import BlogSearch from '@/components/BlogSearch';
import BreadCrumb from '@/components/BreadCrumb';
import Comment from '@/components/Comment';
import CommentWrap from '@/components/CommentWrap';
import NativePatternArt from '@/components/NativePatternArt';

import { IBlogpost } from "@/contracts/blogpost.type";
import { IComment } from '@/contracts/comment.type';

type Props = {
  blogpost: IBlogpost
  comments: IComment[]
}

function BlogView({blogpost, comments}: Props) {
  return ( <section>
      {/* breadcrumb */}
      <div className="bg-nearWhite">
        <BreadCrumb/>
      </div>
      <div className="mx-auto w-full sm:w-3xl md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl">
        <div className="mx--15px flex">
          <aside className="px-15px md:w-1/4">
            {/* Category box for blog */}
            <BlogSearch />
            <BestSellers />
            <NativePatternArt />
          </aside>
          <div className="px-15px md:w-3/4">
            <div className="mx--15px">
              <Image alt="blog image" width="1050" height="1050" src={blogpost.imageurl}></Image>
            </div>
            <div className="p-5 bg-nearWhite">
              <span className="text-coral text-sm font-jost">
                {new Date(parseInt(blogpost.createdAt)).toLocaleDateString("en-US")}
              </span>
              <p className="mt-[10px] text-grey2">{blogpost.content}</p>
            </div>
            <div>
              <h4 className="bg-coral mt-[50px] text-lg uppercase font-medium rounded-t-md text-white py-15px px-[20px]">
                Comments
              </h4>
              <div id="comments" className="bg-nearWhite p-[30px]">
                {comments.map((comment,index) => 
                <CommentWrap key={index}>
                  <Comment name={comment.user.username} date={comment.createdAt} comment={comment.comment}></Comment>
                </CommentWrap>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      );
}

export default BlogView;