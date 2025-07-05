import "./index.css"
import { useEffect } from "react"
import Home from "./Home/home.jsx"
import Features from "../src/Features/features.jsx"
import Reviews from "../src/Reviews/reviews.jsx"
import Products from "../src/Products/products.jsx"
import Accordion from './Accordion/Accordion.jsx'
import Blogs from "../src/Blogs/Blogs.jsx"
import Discount from "../src/Discount/discount.jsx"
import Footer from "../src/Footer/footer.jsx"


import AOS from "aos";
import "aos/dist/aos.css";


function App(){

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return(
    <>
      <Home />
      <Features />
      <Reviews />
      <Products />
      <Accordion />
      <Blogs  />
      <Discount  />
      <Footer  />
      <BottomGlass  />
      
    </>
  )
}



function BottomGlass() {
  return (
    <div className="fixed h-18 w-full bottom-0 z-50">
      <div className="w-full h-full backdrop-blur-[2.5px] bg-white/1 dark:bg-black/1">
      </div>
    </div>
  );
}








export default App;
