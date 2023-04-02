import React, { createContext, useContext } from "react";
import Content from "./Content";
import Head from "./Head";
import Footer from "../Footer";

export const ArticleContext = createContext(null);
export const ArticleImageContext = createContext(null);

const Article = (props) => {
  // console.log("in Article Index : ", props);
  return (
    <>
      <ArticleContext.Provider value={props}>
        <Head />
        <Content />
        <Footer />
      </ArticleContext.Provider>
    </>
  );
};

export default Article;
