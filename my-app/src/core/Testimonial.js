import React from "react";
import badge from "../Assets/Images/Badge.png";

const Testimonial = () => {
  return (
    <div className='container-testimonial'>
      <div>
        <img
          className='avatar'
          src='https://www.w3schools.com/w3images/avatar_g2.jpg'
          alt=''
        />
      </div>
      <div className='content'>
        <h1>David Sylvian</h1>
        <br />
        <h6>CEO, Manafon</h6>
        <br />
        <p>
          -Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          sed aliquam ipsa ducimus vitae assumenda possimus......
        </p>
      </div>
      <div>
        <img className='ba' src={badge} alt='' />
      </div>
    </div>
  );
};

export default Testimonial;
