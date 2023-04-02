import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { stringify } from "postcss";

const CategoryWiseArticles = () => {
  const [politics, setPolitics] = useState();
  const [navItems, setNavItems] = useState([
    {
      name: "Politics",
    },
    {
      name: "Sports",
    },
    {
      name: "Gaming",
    },
    {
      name: "Technology",
    },
    {
      name: "Hollywood",
    },
    {
      name: "Fashion",
    },
  ]);

  const [articles, setArticles] = useState([{}, {}, {}, {}, {}, {}]);

  useEffect(async () => {
    await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics&api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.response.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="category-wise-articles w-full h-auto pl-3 lg:pl-10 lg:px-10 pb-10">
      {navItems.map((cat) => (
        <div className="pt-6">
          <h2 className="font-RobotoSlab text-[32px] lg:text-[34px] font-bold">
            {cat.name}
          </h2>
          <div className="flex flex-row items-center space-x-7 overflow-x-scroll mt-4 border-b pb-8">
            {articles.map((article) => (
              <div className="article-item min-w-[220px]  lg:flex-1 h-72 flex flex-col cursor-pointer">
                <div className="article-item-img-area h-auto w-full relative">
                  <img
                    src={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://image.cnbcfm.com/api/v1/image/106886531-1621601215518-gettyimages-1232995057-121_05192021_warriors_lakers_pantozzi_0930.jpeg?v=1621601247&w=740&h=416&ffmt=webp"
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="hero-posts-small-sub-heading font-RobotoSlab text-lg mt-4 hover:text-gray-500 font-medium line-clamp-2">
                  NBA sub heading for the post for games are a success and why
                  should keep the format
                </h3>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row border-b">
            <h5 className="font-RobotoSlab text-sm py-1 ml-auto cursor-pointer hover:text-gray-500 mr-3 lg:mr-0">
              More {cat.name} {">"}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryWiseArticles;
