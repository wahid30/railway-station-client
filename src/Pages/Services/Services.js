import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Services.css";
const Services = () => {
  const datas = useLoaderData();
  // console.log(datas);
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Added Successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
  };
  return (
    <div className="custom-bg-for-service"> 
      <div className="w-[90%] mx-auto py-5 custom-flex-services">
        <h1 className="text-center text-5xl my-3 text-white font-bold">Book Your Services</h1>
        <p className="text-white text-2xl">Traveling by train offers a unique experience, allowing you to appreciate the scenic beauty and immerse yourself in the cultural charm of your destination. Whether you're embarking on a solo adventure, a family vacation, or a business trip, our goal is to make your train booking process seamless, efficient, and enjoyable.Book your train services today and embark on a memorable journey filled with comfort, convenience, and extraordinary moments. Let us take care of the logistics while you sit back, relax, and enjoy the scenic ride to your desired destination. Start your travel experience with us and make lifelong memories along the tracks.</p>
        {/* modal  */}
        <div className="card-actions justify-center">
          <label htmlFor="TrainBookedServices" className="btn btn-accent">
            Book Now
          </label>
          <input
            type="checkbox"
            id="TrainBookedServices"
            className="modal-toggle"

          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="my-5">
                <label
                  htmlFor="TrainBookedServices"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
              <div>
                <form onSubmit={handleAddUser}>
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="userName"
                    placeholder="Enter your name"
                    className="mb-2 input input-bordered w-full"
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="userAge"
                    placeholder="Enter your age"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="userAddress"
                    placeholder="Enter your address"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="number"
                    name="userContactNumber"
                    placeholder="Enter your contact number"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="from"
                    placeholder="From-"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="to"
                    placeholder="To-"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="date"
                    name="date"
                    className="mb-2 input input-bordered w-full "
                    required
                  />
                  <br />
                  <textarea
                    onBlur={handleInputBlur}
                    type="text"
                    name="issues"
                    placeholder="Place Your issues"
                    className="textarea w-full textarea-bordered"
                    required
                  />
                  <br />
                  <button
                    htmlFor="TrainBookedServices"
                    className="modal-action btn btn-info"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <div className="modal-action justify-center">
                 <label
                   htmlFor="TrainBookedServices"
                   className="btn btn-success"
                 >
                   Submit
                 </label>
               </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
