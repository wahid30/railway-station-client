import React from "react";
const MyBookingsCards = ({ srv }) => {
  const {
    userName,
    userContactNumber,
    userAge,
    userAddress,
    to,
    issues,
    from,
    date,
  } = srv;
  //   console.log(date);
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="card-title">Name: {userName}</h2>
        <p>Age: {userAge}</p>
        <p>Address: {userAddress}</p>
        <p>Phone Number: {userContactNumber}</p>
        <p>From: {from}</p>
        <p>To: {to}</p>
        <p>Date: {date}</p>
        <p>Issues: {issues}</p>
      </div>
    </div>
  );
};

export default MyBookingsCards;
