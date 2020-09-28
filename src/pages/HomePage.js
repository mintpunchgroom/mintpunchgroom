import React from "react";
import AboutUs from "../components/sections/AboutUs";
// import Prices from "../components/sections/Prices";
import Main from "../components/sections/Main";
import Gallery from "../components/sections/Gallery";
// import Reviews from "../components/sections/Reviews";
import Steps from "../components/sections/Steps";

const HomePage = () => {
  return (
    <>
      <Main />
      <AboutUs />
      <Gallery />
      {/* <Reviews /> */}
      {/* <Prices /> */}
      <Steps />
    </>
  );
};

export default HomePage;
