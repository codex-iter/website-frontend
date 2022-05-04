import React from "react";

const ContactForm = () => {
  function onLoad(event) {
    event.preventDefault();
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdOp_wsPsjwFvxhSRECAxBsUGeL2s4cjJ1SghNLgNPg7f8bHQ/viewform"
    );
  }
  
  return (
    <div>
      <form className="form">
        <div className="text">
          <h1 className="sub">Join our monthly newsletter</h1>
        </div>
        <div>
          <button className="btn btn-primary" onClick={onLoad}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
