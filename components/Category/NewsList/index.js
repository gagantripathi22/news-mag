import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

const NewsList = () => {
  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let cat = useRouter();

  const fetchNewsByCategory = async () => {
    if (category)
      await axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
        )
        .then((response) => {
          setArticles(response.data.response.docs);
          console.log(response.data.response.docs);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  useEffect(() => {
    setCategory(cat.query.category);
    console.log("category changed", category);
    if (cat.query.category !== category) setIsLoading(true);
  }, [cat]);

  useEffect(() => {
    fetchNewsByCategory();
  }, [category]);

  useEffect(() => {
    setIsLoading(false);
  }, [articles]);

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
        <title>
          {category?.charAt(0).toUpperCase() + category?.slice(1) + " News"}
        </title>
      </Head>
      {!isLoading ? (
        <div className="w-screen h-auto lg:pt-8 lg:px-10 flex-col lg:flex-row max-w-[1600px] ml-auto mr-auto grid md:grid-cols-2 gap-4 pb-7 lg:grid-cols-3 xl:grid-cols-3">
          {articles?.map((article) => {
            return (
              <Link
                href={{
                  pathname: `/${generateUrlFromTitle(article.headline.main)}`,
                  query: {
                    article: JSON.stringify(article),
                    image: `https://static01.nyt.com/${article.multimedia[0]?.url}`,
                  },
                }}
                as={`/${generateUrlFromTitle(article.headline.main)}`}
              >
                <div className="h-96 w-auto">
                  <div className="mb-0 mt-5 lg:mt-0 cursor-pointer flex flex-col">
                    <div className="side-posts-img-area h-64 w-full relative overflow-hidden">
                      <img
                        src={
                          article?.multimedia[0]?.url
                            ? `https://static01.nyt.com/${article.multimedia[0].url}`
                            : "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                        }
                        className="hero-posts-img object-fill w-full"
                      />
                    </div>
                    <div className="flex p-3 lg:pl-0 flex-col">
                      <h3 className="font-RobotoSlab text-2xl mt-2 leading-6 hover:text-gray-500 font-medium">
                        {article.headline.main}
                      </h3>
                      {/* <h4 className="hero-posts-small-sub-heading text-[10px] lg:text-[15px] font-RobotoSlab lg:leading-6 text-gray-500 cursor-pointer mt-2">
                  {topHeadlinesContext?.results[6].abstract}
                </h4> */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <h1 className="text-black">Loading</h1>
        </div>
      )}
    </>
  );
};

export default NewsList;
