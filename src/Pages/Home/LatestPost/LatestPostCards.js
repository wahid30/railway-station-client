import React from "react";

const LatestPostCards = ({pst}) => {
    const {img,news,postingTime,title} = pst
    // console.log(pst);
  return (

    <div className="grid grid-cols-2 gap-5 border rounded-lg shadow-xl">
        <div><img src={img} alt="" /></div>
        <div className="grid ">
            <div className="font-bold">{title}</div>
            <div>{news.slice(0,100)}</div>
            <div className="text-sm">{postingTime} day ago</div>
        </div>
    </div>
//         <div className="card card-side bg-base-100 shadow-xl">
//   <figure><img src={img} alt="Movie"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{title}</h2>
//     <p>{news.slice(0,80)}</p>
//     <div className="card-actions justify-end">
//       <div>{postingTime} days ago</div>
//     </div>
//   </div>
// </div>
  )
};

export default LatestPostCards;