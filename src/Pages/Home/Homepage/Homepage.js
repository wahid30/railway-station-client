import React from "react";
import TopTravelDestination from "../TopTravelDestination/TopTravelDestination";
import LatestPost from "../LatestPost/LatestPost";
import Testimonial from "../Testimonial/Testimonial";


const Homepage = () => {
  return (
    <div>
      <TopTravelDestination></TopTravelDestination>
      <LatestPost></LatestPost>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Homepage;