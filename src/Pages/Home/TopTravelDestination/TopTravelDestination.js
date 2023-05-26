import React from "react";
import img01 from "../../../images/districts/Karnaphuli_River_at_night_(02).jpg"
import img02 from "../../../images/districts/OIP.jpeg"
import img03 from "../../../images/districts/R.jpeg"
import img04 from "../../../images/districts/Sylhet.jpg"
import img05 from "../../../images/districts/maxresdefault.jpg"
import img06 from "../../../images/districts/thingstododhaka_00.jpg"
const TopTravelDestination = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
   <h1>Top Travel Destination</h1>
   <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {/* card 01  */}
    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img01} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
{/* card 02  */}
<div className="card  bg-base-100 shadow-xl">
  <figure><img src={img02} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
   {/* card 03  */}
   <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img03} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
   {/* card 04  */}
   <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img04} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
   {/* card 05  */}
   <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img05} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
   {/* card 06  */}
   <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img06} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
   </div>
   
    </div>
  );
};

export default TopTravelDestination;