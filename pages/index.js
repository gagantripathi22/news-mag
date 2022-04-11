import Hero from '../components/Home/Hero'
import SidePosts from '../components/Home/SidePosts'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import CategoryWiseArticles from '../components/Home/CategoryWise'

export default function Index() {
  return (
    <div className="h-auto w-screen">
      <div className="max-w-[1600px]">
        <Navbar />
      </div>
      <div className="w-screen h-auto lg:pt-8 lg:px-10 flex flex-col lg:flex-row max-w-[1600px] ml-auto mr-auto">
        <Hero />
        <div className="w-8 h-full hidden lg:flex"></div>
        <SidePosts />
      </div>
      <div className="max-w-[1600px] ml-auto mr-auto">
        <CategoryWiseArticles />
      </div>
      <div className="max-w-[1600px]">
        <Footer />
      </div>
    </div>
  )
}