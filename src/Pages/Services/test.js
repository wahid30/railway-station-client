import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./DogCareService.css";
const DogCareService = () => {
  const datas = useLoaderData();
  // console.log(datas);
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("https://pet-service-server-wahid30.vercel.app/dayCareServices", {
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
    // console.log(newUser);
  };
  return (
    <div className="px-5 my-5 dog-care-bg bg-slate-100">
      <div className="p-5">
        <h1 className="text-4xl text-center  font-bold">Day Care Service</h1>
        <div className="grid gap-5 my-12">
          {/* 001  */}
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Phone
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>(281 809-7748)</p>
              <p>(281)715-4029(Fax)</p>
            </div>
          </div>
          {/* 002  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Hours of Operation
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p> Monday-Friday: 7 a.m. - 7p.m</p>
              <p>Saturday: 9 a.m.-6 p.m.</p>
              <p>Sunday: 10 a.m.-6 p.m.</p>
            </div>
          </div>
          {/* 003  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Check Out Times
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>Monday-Sunday: 1 p.m</p>
            </div>
          </div>
          {/* 004  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Address
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>9040 Highway 6 N Houston, TX 77095-2303</p>
            </div>
          </div>
          {/* 005  */}

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Service Areas
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>Cypress, Houston, Jersey Katy, Spring Valley, Village</p>
            </div>
          </div>
        </div>
        {/* modal  */}
        <div className="card-actions justify-center">
          <label htmlFor="VeterinarianServices" className="primary-custom-btn">
            Book Now
          </label>
          <input
            type="checkbox"
            id="VeterinarianServices"
            className="modal-toggle"
          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="my-5">
                <label
                  htmlFor="VeterinarianServices"
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
                    name="animalType"
                    placeholder="Enter Animal type"
                    className="mb-2 input input-bordered w-full"
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="animalAge"
                    placeholder="Enter Animal age"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="animalName"
                    placeholder="Enter Animal Name"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="ownerName"
                    placeholder="Enter Owner Name"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="contactNumber"
                    placeholder="Enter Contact Number"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <input
                    onBlur={handleInputBlur}
                    type="date"
                    name="date"
                    className="mb-2 input input-bordered w-full "
                  />
                  <br />
                  <textarea
                    onBlur={handleInputBlur}
                    type="text"
                    name="SpecialRequirements"
                    placeholder="Special Requirements"
                    className="textarea w-full textarea-bordered"
                  />
                  <br />
                  <button
                    htmlFor="VeterinarianServices"
                    className="modal-action btn btn-info"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <div className="modal-action justify-center">
                  <label
                    htmlFor="VeterinarianServices"
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

export default DogCareService;