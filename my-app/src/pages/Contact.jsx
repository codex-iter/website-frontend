import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    fetch("https://codexweb-backend.herokuapp.com/api/addMessage", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Toastify({
            text: "Message sent successfully !!",
            duration: 3000,
            backgroundColor: "#56ccf2",
            stopOnFocus: true,
            position: "right",
          }).showToast();
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="lg:w-1/2 ">
          <h1 className="text-4xl tracking-tight font-extrabold text-pastel text-center md:text-left sm:text-5xl md:text-6xl ">
            Drop us a line.
          </h1>
          <h2 className="text-2xl tracking-tight font-extrabold text-slate-300 text-center md:text-left sm:text-3xl md:text-4xl pt-6">
            or DM us on
          </h2>
          <div className="my-4">
            <ContactInfo className="justify-center" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:w-1/2">
          <label className="block">
            <span className="text-slate-400">Full name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-secondary text-pastel shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 bg-primary"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-slate-400">Email address</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-secondary shadow-sm text-pastel focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 bg-primary"
              placeholder="john@google.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-slate-400">Message</span>
            <textarea
              className="mt-1 block w-full rounded-md border-secondary shadow-sm text-pastel focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 bg-primary"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button
            onClick={handleSend}
            className="w-full mx-auto flex items-center justify-center px-8 py-2 border border-transparent text-lg font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-3 md:text-lg md:px-10"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
