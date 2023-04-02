import { useEffect, createContext, useContext, useState } from "react";
import axios from "axios";
import Hero from "../components/Home/Hero";
import SidePosts from "../components/Home/SidePosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryWiseArticles from "../components/Home/CategoryWise";

export const ThemeContext = createContext(null);

export default function Index() {
  const [topHeadlines, setTopHeadlines] = useState(null);
  const fetchNews = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
      )
      .then((response) => {
        setTopHeadlines(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <ThemeContext.Provider value={topHeadlines}>
      <div className="h-auto w-screen">
        <div className="max-w-[1600px]">
          <Navbar />
        </div>
        <div className="w-screen h-auto lg:pt-8 lg:px-10 flex flex-col lg:flex-row max-w-[1600px] ml-auto mr-auto">
          <Hero />
          <div className="w-8 h-full hidden lg:flex"></div>
          <SidePosts />
        </div>
        {/* <div className="max-w-[1600px] ml-auto mr-auto">
          <CategoryWiseArticles />
        </div> */}
        <div className="max-w-[1600px]">
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
