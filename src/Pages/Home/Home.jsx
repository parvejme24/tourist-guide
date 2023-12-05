import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import TravelGuide from "../../components/Home/TravelGuide/TravelGuide";
import { Helmet } from "react-helmet";
import TourType from "../../components/Home/TourType/TourType";
import TouristStory from "../../components/Home/TourustStory/TouristStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBDX | Home</title>
      </Helmet>
      <Banner />
      <TravelGuide />
      <TourType />
      <TouristStory />
    </div>
  );
};

export default Home;
