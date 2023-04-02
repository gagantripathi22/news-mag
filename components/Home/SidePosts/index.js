import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import { ThemeContext } from "../../../pages";
import Link from "next/link";

const SidePosts = () => {
  const [topHeadlines, setTopHeadlines] = useState();
  const topHeadlinesContext = useContext(ThemeContext);
  useEffect(() => {
    setTopHeadlines(topHeadlinesContext);
  });

  const generateUrlFromTitle = (title) => {
    if (title != undefined || null) {
      title = title.replace(/[^\w\s]/g, "");
      title = title.toLowerCase();
      title = title.replace(/\s/g, "-");
      return title;
    }
  };
  return (
    <div className="h-full flex-1">
      {/* {sidePosts.map((posts) => ( */}
      <>
        <Link
          href={{
            pathname: `/${generateUrlFromTitle(
              topHeadlines?.results[6].title
            )}`,
            query: {
              article: JSON.stringify(topHeadlines?.results[6]),
              image:
                topHeadlines?.results[6]?.media[0]["media-metadata"][2].url,
            },
          }}
          as={`/${generateUrlFromTitle(topHeadlines?.results[6].title)}`}
        >
          <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-row lg:flex-col">
            <div className="side-posts-img-area h-32 lg:h-52 w-full relative overflow-hidden">
              <img
                src={
                  topHeadlines?.results[6].media[0]
                    ? topHeadlines?.results[6].media[0]["media-metadata"][2].url
                    : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                }
                className="hero-posts-img object-fill w-full"
              />
            </div>
            <div className="flex pl-3 lg:pl-0 flex-col">
              <h3 className="font-RobotoSlab text-base lg:text-lg mt-2 leading-6 hover:text-gray-500 font-medium">
                {topHeadlines?.results[6].title}
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                {topHeadlines?.results[6].abstract}
              </h4>
            </div>
          </div>
        </Link>
        <div className="w-full lg:h-2 lg:mt-2 lg:mb-5"></div>
        <Link
          href={{
            pathname: `/${generateUrlFromTitle(
              topHeadlines?.results[7].title
            )}`,
            query: {
              article: JSON.stringify(topHeadlines?.results[7]),
              image:
                topHeadlines?.results[7]?.media[0]["media-metadata"][2].url,
            },
          }}
          as={`/${generateUrlFromTitle(topHeadlines?.results[7].title)}`}
        >
          <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-row lg:flex-col">
            <div className="side-posts-img-area h-32 lg:h-52 w-full relative overflow-hidden">
              <img
                src={
                  topHeadlines?.results[7].media[0]
                    ? topHeadlines?.results[7].media[0]["media-metadata"][2].url
                    : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                }
                className="hero-posts-img object-fill w-full"
              />
            </div>
            <div className="flex pl-3 lg:pl-0 flex-col">
              <h3 className="font-RobotoSlab text-base lg:text-lg mt-2 leading-6 hover:text-gray-500 font-medium">
                {topHeadlines?.results[7].title}
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                {topHeadlines?.results[7].abstract}
              </h4>
            </div>
          </div>
        </Link>
        <div className="w-full lg:h-2 lg:mt-2 lg:mb-5"></div>
        <Link
          href={{
            pathname: `/${generateUrlFromTitle(
              topHeadlines?.results[8].title
            )}`,
            query: {
              article: JSON.stringify(topHeadlines?.results[8]),
              image:
                topHeadlines?.results[8]?.media[0]["media-metadata"][2].url,
            },
          }}
          as={`/${generateUrlFromTitle(topHeadlines?.results[8].title)}`}
        >
          <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-row lg:flex-col">
            <div className="side-posts-img-area h-32 lg:h-52 w-full relative overflow-hidden">
              <img
                src={
                  topHeadlines?.results[8].media[0]
                    ? topHeadlines?.results[8].media[0]["media-metadata"][2].url
                    : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                }
                className="hero-posts-img object-fill w-full"
              />
            </div>
            <div className="flex pl-3 lg:pl-0 flex-col">
              <h3 className="font-RobotoSlab text-base lg:text-lg mt-2 leading-6 hover:text-gray-500 font-medium">
                {topHeadlines?.results[8].title}
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                {topHeadlines?.results[8].abstract}
              </h4>
            </div>
          </div>
        </Link>
        <div className="w-full lg:h-2 lg:mt-2 lg:mb-5"></div>
        <Link
          href={{
            pathname: `/${generateUrlFromTitle(
              topHeadlines?.results[11].title
            )}`,
            query: {
              article: JSON.stringify(topHeadlines?.results[11]),
              image:
                topHeadlines?.results[15]?.media[0]["media-metadata"][2].url,
            },
          }}
          as={`/${generateUrlFromTitle(topHeadlines?.results[11].title)}`}
        >
          <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-row lg:flex-col">
            <div className="side-posts-img-area h-32 lg:h-52 w-full relative overflow-hidden">
              <img
                src={
                  topHeadlines?.results[15].media[0]
                    ? topHeadlines?.results[15].media[0]["media-metadata"][2]
                        .url
                    : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                }
                className="hero-posts-img object-fill w-full"
              />
            </div>
            <div className="flex pl-3 lg:pl-0 flex-col">
              <h3 className="font-RobotoSlab text-base lg:text-lg mt-2 leading-6 hover:text-gray-500 font-medium">
                {topHeadlines?.results[15].title}
              </h3>
              <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                {topHeadlines?.results[15].abstract}
              </h4>
            </div>
          </div>
        </Link>
        <div className="w-full lg:h-2 lg:mt-2 lg:mb-5"></div>
      </>
      {/* ))} */}
    </div>
  );
};

export default SidePosts;
