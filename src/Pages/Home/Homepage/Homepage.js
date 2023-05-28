import React from "react";
import TopTravelDestination from "../TopTravelDestination/TopTravelDestination";
import LatestPost from "../LatestPost/LatestPost";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../Banner/Banner";


const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <TopTravelDestination></TopTravelDestination>
      <LatestPost></LatestPost>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Homepage;