import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <Head>
        <title>Sports</title>
      </Head>
      <div className="hero-posts w-full lg:w-3/4 flex flex-col h-fit">
        <Link href="/abc">
          <div className="hero-posts-one flex flex-col lg:flex-row h-[510px] lg:h-[370px] cursor-pointer">
            <div className="hero-posts-one-img-area h-full w-full lg:w-2/3 relative">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="hero-posts-one-text-area group hover: flex-1 py-3 lg:py-2 px-4 lg:px-6">
              <h1 className="hero-posts-big-title text-[23px] lg:text-3xl font-RobotoSlab lg:leading-10 group-hover:text-gray-500 font-medium">
                NBA play-in games are a success — here's why the league should keep the format
              </h1>
              <h4 className="hero-posts-big-sub-heading text-base lg:text-lg font-RobotoSlab leading-7 mt-2 lg:mt-4 text-gray-500">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
            </div>
          </div>
        </Link>
        <div className="hero-posts-two w-full h-auto flex flex-col lg:flex-row mt-8">
          <div className="hero-posts-two-one w-full lg:w-1/2 h-fit lg:h-[390px] cursor-pointer flex flex-row lg:flex-col-reverse">
            <div className="hero-posts-two-one-img-area h-32 lg:h-3/4 w-full relative lg:mt-3">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/107038296-1648567657084-cavs_patch.jpg?v=1648567728&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* flex-col-reverse */}
            <div className="flex flex-col-reverse pl-3 lg:pl-0 h-fit">
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[16px] font-RobotoSlab lg:leading-7 mt-2 text-gray-500">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
              <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-base lg:text-xl hover:text-gray-500 font-medium">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
            </div>
          </div>
          <div className="h-5 lg:w-8 lg:h-0"></div>
          <div className="hero-posts-two-one w-full lg:w-1/2 h-fit lg:h-[390px] cursor-pointer flex flex-row lg:flex-col-reverse">
            <div className="hero-posts-two-one-img-area h-32 lg:h-3/4 w-full relative lg:mt-3">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/107041433-1649092465084-gettyimages-1236085489-cz9i0611_2020053051249023.jpeg?v=1649092502&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* flex-col-reverse */}
            <div className="flex flex-col-reverse pl-3 lg:pl-0 h-fit">
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[16px] font-RobotoSlab lg:leading-7 mt-2 text-gray-500">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
              <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-base lg:text-xl hover:text-gray-500 font-medium">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
            </div>
          </div>
          {/* TYPE 1 */}
          {/* <div className="hero-posts-two-one w-1/2 h-[390px] cursor-pointer flex flex-col">
            <div className="hero-posts-two-one-img-area h-3/4 w-full relative">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/107041433-1649092465084-gettyimages-1236085489-cz9i0611_2020053051249023.jpeg?v=1649092502&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl mt-3 hover:text-gray-500">
              NBA sub heading for the post for games are a success and why should keep the format
            </h3>
            <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 mt-2 text-gray-500">
              NBA sub heading for the post for games are a success and why should keep the format
            </h4>
          </div> */}
          {/* TYPE 2 */}
          {/* <div className="hero-posts-two-one w-1/2 h-[350px] cursor-pointer">
            <div className="hero-posts-two-one-img-area h-3/4 w-full relative">
              <Image
                src="https://image.cnbcfm.com/api/v1/image/107041433-1649092465084-gettyimages-1236085489-cz9i0611_2020053051249023.jpeg?v=1649092502&w=740&h=416&ffmt=webp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl mt-3 hover:text-gray-500">
              NBA sub heading for the post for games are a success and why should keep the format
            </h3>
            <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 mt-2 text-gray-500">
              NBA sub heading for the post for games are a success and why should keep the format
            </h4>
          </div> */}
        </div>
        <div className="hidden lg:block mt-8 w-full h-auto border-t">
          <div className="border-b h-full flex flex-row mb-2">
            <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
              <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
            </div>
            <div className="hero-posts-small-img-area w-1/6">
              <div className="hero-posts-two-one-img-area h-full w-full relative mb-2">
                <Image
                  src="https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="border-b h-full flex flex-row mb-2">
            <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
              <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
            </div>
            <div className="hero-posts-small-img-area w-1/6">
              <div className="hero-posts-two-one-img-area h-full w-full relative">
                <Image
                  src="https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="border-b h-full flex flex-row mb-2">
            <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
              <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                NBA sub heading for the post for games are a success and why should keep the format
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                NBA sub heading for the post for games are a success and why should keep the format
              </h4>
            </div>
            <div className="hero-posts-small-img-area w-1/6">
              <div className="hero-posts-two-one-img-area h-full w-full relative">
                <Image
                  src="https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero