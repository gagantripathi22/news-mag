import React, { useState } from 'react'
import Image from 'next/image'

const SidePosts = () => {
  const [sidePosts, setSidePosts] = useState([
    {

    },
    {

    },
    {

    }
  ])
  return (
    <div className="h-full flex-1">
      {sidePosts.map((posts) => (
        <>
          <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-row lg:flex-col">
            <div className="side-posts-img-area h-32 lg:h-52 w-full relative">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex pl-3 lg:pl-0 flex-col">
              <h3 className="font-RobotoSlab text-base lg:text-lg mt-2 leading-6 hover:text-gray-500 font-medium">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
            </div>
          </div>
          <div className="w-full lg:h-2 lg:mt-2 lg:mb-5"></div>
        </>
      ))}
    </div>
  )
}

export default SidePosts