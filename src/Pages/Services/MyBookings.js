import React, { useEffect, useState } from "react";
import MyBookingsCards from "./MyBookingsCards";
const MyBookings = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-[90%] mx-auto py-5">
      <h1 className="text-2xl text-center my-5">Available Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.length < 1
          ? "No Books Available"
          : services.map((srv) => (
              <MyBookingsCards srv={srv}></MyBookingsCards>
            ))}
      </div>
    </div>
  );
};

export default MyBookings;
