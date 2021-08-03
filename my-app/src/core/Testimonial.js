import React from "react";
import badge from "../images/Badge.png";

const Testimonial = () => {
  return (
    <div className='container'>
      <div>
        <img
          className='avatar'
          src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
          alt=''
        />
      </div>
      <div>
        <img className='ba' src={badge} alt='' />
      </div>
      <div className='content'>
        <h1>David Sylvian</h1>
        <h2>CEO, Manafon</h2>
        <p>
          -Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
          sed aliquam ipsa ducimus vitae assumenda possimus. Maxime, deleniti
          sed autem facere perferendis nihil quae.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
