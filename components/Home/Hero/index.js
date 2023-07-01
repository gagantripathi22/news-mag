import React, { useEffect, useState, useContext, Suspense } from "react";
import Head from "next/head";
import Link from "next/link";

import { ThemeContext } from "../../../pages";

const Hero = () => {
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
    <>
      <Head>
        <title>News Magazine</title>
      </Head>
      <div className="hero-posts w-full lg:w-3/4 flex flex-col h-fit">
        <Link
          href={{
            pathname: `/${generateUrlFromTitle(
              topHeadlines?.results[0].title
            )}`,
            query: {
              article: JSON.stringify(topHeadlines?.results[0]),
              image:
                topHeadlinesContext?.results[0].media[0] &&
                topHeadlinesContext?.results[0].media[0]["media-metadata"][2]
                  .url,
            },
          }}
          as={`/${generateUrlFromTitle(topHeadlines?.results[0].title)}`}
        >
          <div className="hero-posts-one flex flex-col lg:flex-row h-[510px] lg:h-[370px] cursor-pointer overflow-hidden">
            <div className="hero-posts-one-img-area h-full w-full lg:w-2/3 relative">
              <img
                src={
                  topHeadlinesContext?.results[0].media[0]
                    ? topHeadlinesContext?.results[0].media[0][
                        "media-metadata"
                      ][2].url
                    : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                }
                className="hero-posts-img object-fill w-full"
              />
            </div>
            <div className="hero-posts-one-text-area group hover: flex-1 py-3 lg:py-2 px-4 lg:px-6">
              <h1 className="hero-posts-big-title text-[23px] lg:text-3xl font-RobotoSlab lg:leading-10 group-hover:text-gray-500 font-medium">
                {topHeadlines?.results[0].title}
              </h1>
              <h4 className="hero-posts-big-sub-heading text-base lg:text-lg font-RobotoSlab leading-7 mt-2 lg:mt-4 text-gray-500">
                {topHeadlines?.results[0].abstract}
              </h4>
            </div>
          </div>
        </Link>
        <div className="hero-posts-two w-full h-auto flex flex-col lg:flex-row mt-12">
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[1].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[1]),
                image:
                  topHeadlinesContext?.results[1].media[0] &&
                  topHeadlinesContext?.results[1].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[1].title)}`}
          >
            <div className="hero-posts-two-one w-full lg:w-1/2 h-fit lg:h-[390px] cursor-pointer flex flex-row lg:flex-col-reverse">
              <div className="hero-posts-two-one-img-area h-32 lg:h-3/4 w-full relative lg:mt-3 overflow-hidden">
                <img
                  src={
                    topHeadlinesContext?.results[1].media[0]
                      ? topHeadlinesContext?.results[1].media[0][
                          "media-metadata"
                        ][2].url
                      : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                  }
                  className="hero-posts-img object-fill w-full"
                />
              </div>
              {/* flex-col-reverse */}
              <div className="flex flex-col-reverse pl-3 lg:pl-0 h-fit">
                <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[16px] font-RobotoSlab lg:leading-7 mt-2 text-gray-500">
                  {topHeadlines?.results[1].abstract}
                </h4>
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-base lg:text-xl hover:text-gray-500 font-medium">
                  {topHeadlines?.results[1].title}
                </h3>
              </div>
            </div>
          </Link>
          <div className="h-5 lg:w-8 lg:h-0"></div>
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[2].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[2]),
                image:
                  topHeadlinesContext?.results[2].media[0] &&
                  topHeadlinesContext?.results[2].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[2].title)}`}
          >
            <div className="hero-posts-two-one w-full lg:w-1/2 h-fit lg:h-[390px] cursor-pointer flex flex-row lg:flex-col-reverse">
              <div className="hero-posts-two-one-img-area h-32 lg:h-3/4 w-full relative lg:mt-3 overflow-hidden">
                <img
                  src={
                    topHeadlinesContext?.results[2].media[0]
                      ? topHeadlinesContext?.results[2].media[0][
                          "media-metadata"
                        ][2].url
                      : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                  }
                  className="hero-posts-img object-fill w-full"
                />
              </div>
              <div className="flex flex-col-reverse pl-3 lg:pl-0 h-fit">
                <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[16px] font-RobotoSlab lg:leading-7 mt-2 text-gray-500">
                  {topHeadlines?.results[2].abstract}
                </h4>
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-base lg:text-xl hover:text-gray-500 font-medium">
                  {topHeadlines?.results[2].title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden lg:block mt-8 w-full h-auto border-t">
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[3].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[3]),
                image:
                  topHeadlinesContext?.results[3].media[0] &&
                  topHeadlinesContext?.results[3].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[3].title)}`}
          >
            <div className="border-b h-full flex flex-row mb-2">
              <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                  {topHeadlines?.results[3].title}
                </h3>
                <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                  {topHeadlines?.results[3].abstract}
                </h4>
              </div>
              <div className="hero-posts-small-img-area w-1/6">
                <div className="hero-posts-two-one-img-area h-full w-full relative mb-2">
                  <img
                    src={
                      topHeadlinesContext?.results[3].media[0]
                        ? topHeadlinesContext?.results[3].media[0][
                            "media-metadata"
                          ][2].url
                        : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                    }
                    className="hero-posts-img object-fill w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[4].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[4]),
                image:
                  topHeadlinesContext?.results[4].media[0] &&
                  topHeadlinesContext?.results[4].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[4].title)}`}
          >
            <div className="border-b h-full flex flex-row mb-2">
              <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                  {topHeadlines?.results[4].title}
                </h3>
                <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                  {topHeadlines?.results[4].abstract}
                </h4>
              </div>
              <div className="hero-posts-small-img-area w-1/6">
                <div className="hero-posts-two-one-img-area h-full w-full relative">
                  <img
                    src={
                      topHeadlinesContext?.results[4].media[0]
                        ? topHeadlinesContext?.results[4].media[0][
                            "media-metadata"
                          ][2].url
                        : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                    }
                    className="hero-posts-img object-fill w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[5].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[5]),
                image:
                  topHeadlinesContext?.results[5].media[0] &&
                  topHeadlinesContext?.results[5].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[5].title)}`}
          >
            <div className="border-b h-full flex flex-row mb-2">
              <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                  {topHeadlines?.results[5].title}
                </h3>
                <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                  {topHeadlines?.results[5].abstract}
                </h4>
              </div>
              <div className="hero-posts-small-img-area w-1/6">
                <div className="hero-posts-two-one-img-area h-full w-full relative">
                  <img
                    src={
                      topHeadlinesContext?.results[5].media[0]
                        ? topHeadlinesContext?.results[5].media[0][
                            "media-metadata"
                          ][2].url
                        : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                    }
                    className="hero-posts-img object-fill w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[9].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[9]),
                image:
                  topHeadlinesContext?.results[9].media[0] &&
                  topHeadlinesContext?.results[9].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[9].title)}`}
          >
            <div className="border-b h-full flex flex-row mb-2">
              <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                  {topHeadlines?.results[9].title}
                </h3>
                <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                  {topHeadlines?.results[9].abstract}
                </h4>
              </div>
              <div className="hero-posts-small-img-area w-1/6">
                <div className="hero-posts-two-one-img-area h-full w-full relative">
                  <img
                    src={
                      topHeadlinesContext?.results[9].media[0]
                        ? topHeadlinesContext?.results[9].media[0][
                            "media-metadata"
                          ][2].url
                        : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                    }
                    className="hero-posts-img object-fill w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={{
              pathname: `/${generateUrlFromTitle(
                topHeadlines?.results[10].title
              )}`,
              query: {
                article: JSON.stringify(topHeadlines?.results[10]),
                image:
                  topHeadlinesContext?.results[10].media[0] &&
                  topHeadlinesContext?.results[10].media[0]["media-metadata"][2]
                    .url,
              },
            }}
            as={`/${generateUrlFromTitle(topHeadlines?.results[10].title)}`}
          >
            <div className="border-b h-full flex flex-row mb-2">
              <div className="hero-posts-slim-text-area pb-6 pt-4 pr-5 w-5/6">
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-xl hover:text-gray-500 font-medium cursor-pointer">
                  {topHeadlines?.results[10].title}
                </h3>
                <h4 className="hero-posts-small-sub-heading text-[16px] font-RobotoSlab leading-7 text-gray-500 cursor-pointer mt-2">
                  {topHeadlines?.results[10].abstract}
                </h4>
              </div>
              <div className="hero-posts-small-img-area w-1/6">
                <div className="hero-posts-two-one-img-area h-full w-full relative">
                  <img
                    src={
                      topHeadlinesContext?.results[10].media[0]
                        ? topHeadlinesContext?.results[10].media[0][
                            "media-metadata"
                          ][2].url
                        : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                    }
                    className="hero-posts-img object-fill w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
