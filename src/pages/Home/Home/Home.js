import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import DiscoverThings from "../DiscoverThings/DiscoverThings";
import Features from "../Features/Features/Features";
import TourPlans from "../TourPlans/TourPlans";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TourPlans />
      <Features />
      <DiscoverThings />
    </div>
  );
};

export default Home;
