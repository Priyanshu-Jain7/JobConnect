import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarosel from "./CatagoryCarousl";
import LatestJob from "./LatestJob";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
          <Navbar />
          <HeroSection />
          <CategoryCarosel />
          <LatestJob />
          <Footer/>
        </div>
    )
}

export default Home;
