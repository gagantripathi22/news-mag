import React, { useContext } from "react";

import { ArticleContext } from "..";

const Content = () => {
  const article = useContext(ArticleContext);
  return (
    <div className="article-content max-w-[800px] px-5 h-auto ml-auto mr-auto py-5 lg:py-10 leading-[35px] lg:leading-[40px] font-RobotoSlab text-[16px] lg:text-[18px] first-letter:text-5xl lg:first-letter:text-7xl first-letter:mr-2">
      {article?.post.abstract}
    </div>
  );
};

export default Content;
