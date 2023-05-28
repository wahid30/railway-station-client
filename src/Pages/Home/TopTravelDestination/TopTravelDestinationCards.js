import React from "react";
const TopTravelDestinationCards = ({des}) => {
    const {img,district_name,available_status,ticket_price} =des;
    // console.log(des);
  return (
   
    <div className="card bg-base-100 shadow-xl h-[100%]">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {district_name}
    </h2>
    <div className="mt-5 flex justify-between">
      <div className="badge badge-outline">{available_status}</div>
      <div className="badge badge-outline">Price: ${ticket_price}</div>
    </div>
  </div>
</div>
  );
};

export default TopTravelDestinationCards;