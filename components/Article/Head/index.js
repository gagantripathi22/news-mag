import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const HeadArticle = () => {
  return (
    <>
      <Head>
        <title>NBA sub heading for the post for games are a success and why should keep the format</title>
      </Head>
      <div className="w-full h-[75vh] flex flex-col lg:flex-row ml-auto mr-auto border-b">
        <Link href="/">
          <div className="logo absolute top-3 left-6 lg:top-6 lg:left-10 z-30 font-bold text-[32px] lg:text-[40px] font-RobotoSlab text-white cursor-pointer">
            The Rivage
          </div>
        </Link>
        <div className="article-img-area relative h-full w-full lg:w-3/5">
          <Image
            src="https://image.cnbcfm.com/api/v1/image/107041433-1649092465084-gettyimages-1236085489-cz9i0611_2020053051249023.jpeg?v=1649092502&w=740&h=416&ffmt=webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="article-text-area w-full lg:w-2/5 flex lg:ml-10 lg:mt-10 flex-col pr-5 pl-5 lg:pr-20 lg:pl-0">
          <h1 className="font-RobotoSlab font-medium text-[24px] lg:text-[3vw] mt-5 lg:mt-0">
            NBA sub heading for the post for games are a success and why should keep the format
          </h1>
          <div className="font-RobotoSlab mt-auto text-lg mt-6 lg:mt-7 flex flex-row items-center">
            <div className="h-7 w-7 bg-slate-400 rounded-full mr-3"></div>
            <h5 className="text-[15px] lg:text-[1.3vw]">Gagan Tripathi</h5>
          </div>
          <div className="article-time mb-7 lg:mb-10">
            <h5 className="article-time-text text-[1vw] font-RobotoSlab font-thin text-sm mt-4">
              Apr 5, 2022, 11:00am EDT
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeadArticle