import Image from 'next/image'
import React from 'react'

import AnimatedPinkbutton from '@/components/buttons/AnimatedPinkButton';
interface Props {
  image: string;
  date: string;
  title: string
}
function BlogCard({image, date, title}: Props) {
  return ( 
    <div>
      <div>
        <div>
          <a href="">
            <Image height="1005" width="1005" alt="blog image" src={image}></Image>
          </a>
        </div>
        <div>
          <div className="relative pt-[16px] px-[20px] pb-[30px] bg-nearWhite">
            <span className="text-coral text-sm font-jost">
              {date}
            </span>
            <h4 className="mt-[10px] text-lg text-black2">{title}</h4>
            <div className="text-grey2 mt-[11px] mb-[26px] leading-6">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. It h..
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