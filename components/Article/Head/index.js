import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { ArticleContext } from "..";

const HeadArticle = () => {
  const [article, setArticle] = useState(null);
  const [image, setImage] = useState(null);
  const articleContext = useContext(ArticleContext);
  useEffect(() => {
    console.log("Article COntext ", articleContext.post);
    console.log("IMAGE ", articleContext.image);
    setArticle(JSON.parse(articleContext.post));
    setImage(articleContext.image);
  }, [articleContext]);

  useEffect(() => {
    console.log("article ", article);
  }, [article]);

  useEffect(() => {
    console.log("image ", image);
  }, [image]);

  return (
    <>
      <Head>
        <title>
          {article?.title ? article?.title : article?.headline.main}
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
              image
                ? image
                : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="article-text-area w-full lg:w-2/5 flex lg:ml-10 lg:mt-10 flex-col pr-5 pl-5 lg:pr-20 lg:pl-0">
          <h1 className="font-RobotoSlab font-medium text-[24px] lg:text-[3vw] mt-5 lg:mt-0">
            {article?.title ? article?.title : article?.headline.main}
          </h1>
          <div className="font-RobotoSlab mt-auto text-lg mt-6 lg:mt-7 flex flex-row items-center">
            <h5 className="text-[15px] lg:text-[1.3vw]">
              {article?.byline?.original
                ? article?.byline?.original
                : article?.byline}
            </h5>
          </div>
          <div className="article-time mb-7 lg:mb-10">
            <h5 className="article-time-text text-[1vw] font-RobotoSlab font-thin text-sm mt-4">
              {article?.published_date ? article?.published_date : ""}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadArticle;
