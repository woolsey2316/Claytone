import Image from 'next/image'
import React from 'react'

import { slugify } from '@/lib/slugify';

import AnimatedPinkbutton from '@/components/buttons/AnimatedPinkButton';
interface Props {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}
function BlogCard({image, date, title, excerpt}: Props) {
  return ( 
    <div>
      <div>
        <div>
          <a href={"/blog/"+ slugify(title)}>
            <Image height="1005" width="1005" alt="blog image" src={image}></Image>
          </a>
        </div>
        <div>
          <div className="relative pt-[16px] px-5 pb-30px bg-nearWhite">
            <span className="text-coral text-sm font-jost">
              {new Date(parseInt(date)).toString().slice(0,15)}
            </span>
            <h4 className="mt-[10px] text-lg">
              <a href={"/blog/"+ slugify(title)} className="text-black2 hover:text-coral cursor-pointer">{title}</a>
            </h4>
            <div className="text-grey2 mt-[11px] mb-[26px] leading-6">
              <span>
                {excerpt}
              </span>
            </div>
            <AnimatedPinkbutton text="Read More" />
          </div>
        </div>
      </div>
    </div>
   );
}

export default BlogCard;