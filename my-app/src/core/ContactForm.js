import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className='form'>
        <div className='text'>
          <h1>Join our monthly news letter</h1>
        </div>
        <div>
          <input type='email' placeholder='email' />
        </div>
        <div>
          <button className='btn btn-primary'>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
