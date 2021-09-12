import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className='form'>
        <div className='text'>
          <h1>Join our monthly newsletter</h1>
        </div>
        <div>
          <button className='btn btn-primary' onClick={event =>  window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdOp_wsPsjwFvxhSRECAxBsUGeL2s4cjJ1SghNLgNPg7f8bHQ/viewform'}>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
