import React, { useEffect, useState } from "react";
import TopTravelDestinationCards from "./TopTravelDestinationCards";

const TopTravelDestination = () => {
  const [destination,setDestination] = useState([]);
  useEffect(()=>{
    fetch("myJsonFile/district.json")
    .then(res=>res.json())
    .then(data=>setDestination(data))
  },[])
  return (
    <div className="w-9/12 mx-auto my-5">
   <h1>Top Travel Destination</h1>
   <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    
    {
      destination.map(des=><TopTravelDestinationCards des={des}></TopTravelDestinationCards>)
    }

   </div>
   
    </div>
  );
};

export default TopTravelDestination;