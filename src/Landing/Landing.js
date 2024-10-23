import React from "react";
import Nav from "./component/Nav";
import HeroSection from "./component/HeroSection";
import Accordian from "./component/Accordian";
import Other from "./component/Other";
import Footer from "./component/Footer";
import CarouselComponent from "./component/CarouselComponent";
import Pricing from "./component/Pricing";
import HowItWorks from "./component/HowItWorks";
import PopularCourse from "./component/PopularCourse";
import Feature from "./component/Feature";
import "../Images/BG.png";
import FeatureRating from "./component/FeatureRating";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="combined-background">
        <Nav />
        <div style={{ margin: "5%" }}>
          <HeroSection />
        </div>
      </div>
      <div className="" style={{ margin: "5%" }}>
        <FeatureRating />
        <Feature />
        <PopularCourse />
        <HowItWorks />
        <Pricing />
        <CarouselComponent />
        <Accordian />
        <Other />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
