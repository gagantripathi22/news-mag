import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { ArticleContext } from "..";

const HeadArticle = () => {
  const article = useContext(ArticleContext);
  // console.log("in Article Head ", article);
  // console.log("in Article Head Image ", article.image);
  return (
    <>
      <Head>
        <title>
          {article?.post.title
            ? article?.post.title
            : article?.post.headline.main}
        </title>
      </Head>
      <div className="w-full h-[75vh] flex flex-col lg:flex-row ml-auto mr-auto border-b">
        <Link href="/">
          <div className="logo absolute top-3 left-6 lg:top-6 lg:left-10 z-30 font-bold text-[32px] lg:text-[40px] font-RobotoSlab text-white cursor-pointer">
            News Magazine
          </div>
        </Link>
        <div className="article-img-area relative h-full w-full lg:w-3/5">
          <Image
            src={
              article.image
                ? article.image
                : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="article-text-area w-full lg:w-2/5 flex lg:ml-10 lg:mt-10 flex-col pr-5 pl-5 lg:pr-20 lg:pl-0">
          <h1 className="font-RobotoSlab font-medium text-[24px] lg:text-[3vw] mt-5 lg:mt-0">
            {article?.post.title
              ? article?.post.title
              : article?.post.headline.main}
            {/* hello */}
          </h1>
          <div className="font-RobotoSlab mt-auto text-lg mt-6 lg:mt-7 flex flex-row items-center">
            <h5 className="text-[15px] lg:text-[1.3vw]">
              {article?.post.byline.original
                ? article?.post.byline.original
                : article?.post.byline}
              {/* gello */}
            </h5>
          </div>
          <div className="article-time mb-7 lg:mb-10">
            <h5 className="article-time-text text-[1vw] font-RobotoSlab font-thin text-sm mt-4">
              {article?.post.published_date ? article?.post.published_date : ""}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadArticle;
