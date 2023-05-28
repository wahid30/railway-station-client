import React from "react";

const Testimonial = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
        <h1>Testimonial</h1>
      <div className="collapse">
  <input type="checkbox" className="peer" />
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Niloy 
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center gap-3">
  <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
    <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt pariatur itaque ea. Perferendis, blanditiis ipsa.</p></div>
  </div>
</div>
    </div>
  )
};

export default Testimonial;