import React from "react";

const Testimonial = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <h1 className="text-2xl text-center font-bold my-5">Testimonial</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
      {/* person 01  */}
      <div className="flex items-start justify-center gap-5 my-5">
        <div>
          {/* <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://th.bing.com/th/id/R.c82461205d4218eede05a44b5b1c643d?rik=81LZoxzibmEzZg&pid=ImgRaw&r=0" />
            </div>
          </div> */}
        </div>
        <div className="grid gap-2">
          <h1 className="font-bold">Tanvirul Islam Niloy</h1>
          <p className="text-sm">I'm using react on that project and handle the backend by using node.js and mongodb</p>
        </div>
      </div>
      {/* person 02  */}
      <div className="flex items-start justify-center gap-5 my-5">
        <div>
          <div className="avatar">
            {/* <div className="w-24 rounded-full">
              <img src="https://th.bing.com/th/id/R.c82461205d4218eede05a44b5b1c643d?rik=81LZoxzibmEzZg&pid=ImgRaw&r=0" />
            </div> */}
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="font-bold">Tajbirul Jannat Mili</h1>
          <p className="text-sm">I'm using the google authentication for the registration system in our project.</p>
        </div>
      </div>
      {/* person 03  */}
      <div className="flex items-start justify-center gap-5 my-5">
        <div>
          <div className="avatar">
            {/* <div className="w-24 rounded-full">
              <img src="https://th.bing.com/th/id/R.c82461205d4218eede05a44b5b1c643d?rik=81LZoxzibmEzZg&pid=ImgRaw&r=0" />
            </div> */}
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="font-bold">Asura Khanom Mahi</h1>
          <p className="text-sm">I'm using react and tailwing css for the front-end design.</p>
        </div>
      </div></div>
    </div>
  );
};

export default Testimonial;
