import React from "react";
import Banner from "../Banner/Banner";
import DiscoverThings from "../DiscoverThings/DiscoverThings";
import Features from "../Features/Features/Features";
import TourPlans from "../TourPlans/TourPlans";

const Home = () => {
  return (
    <div>
      <Banner />
      <TourPlans />
      <Features />
      <DiscoverThings />
    </div>
  );
};

export default Home;
