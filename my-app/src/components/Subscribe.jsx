import React, { useState } from 'react'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { RxCross2 } from "react-icons/rx";
import {motion} from "framer-motion";
import { API_URL } from '../lib/constants';

const Subscribe = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");

  const handleSend = async () => {
    if (name === "" || email === "" || reg === "") {
      Toastify({
        text: "Form can't be empty!",
        duration: 3000,
        backgroundColor: "#56ccf2",
        stopOnFocus: true,
        position: "right",
      }).showToast();
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/subscribe/subscribe`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          reg: reg,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      if (response.status === 200) {
        const result = await response.json(); // Assuming the response is in JSON format
        Toastify({
          text: result.message || "Subscription successful!", // Adjust according to your API response
          duration: 3000,
          backgroundColor: "#56ccf2",
          stopOnFocus: true,
          position: "right",
        }).showToast();
        setName("");
        setEmail("");
        setReg("");
        props.handle(false);
      } else {
        Toastify({
          text: "Something went wrong!",
          duration: 3000,
          backgroundColor: "#ff0000",
          stopOnFocus: true,
          position: "right",
        }).showToast();
      }
    } catch (err) {
      console.error(err);
      Toastify({
        text: "An error occurred!",
        duration: 3000,
        backgroundColor: "#ff0000",
        stopOnFocus: true,
        position: "right",
      }).showToast();
    }
  };
  
  
  return (
    <div
    className='bg-black/10 backdrop-blur-xl flex justify-center align-middle text-white fixed h-screen w-screen z-50'>
        <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.2}}
        className='m-auto w-5/6 md:w-full'>
        <div className='flex justify-end md:w-1/2 mx-auto'>
          <RxCross2 onClick={()=> props.handle(false)} size={32} className="cursor-pointer hover:scale-[1.2] a" />
        </div>
        <h1 className='text-4xl text-center my-4'>Subscribe to Our Newsletter</h1>
        <div className="grid grid-cols-1 gap-6 lg:w-1/2 mx-auto">
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
            <span className="text-slate-400">Registration Number</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-secondary shadow-sm text-pastel focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 bg-primary"
              placeholder="214100****"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
            />
          </label>
          <button
            onClick={handleSend}
            className="w-full mx-auto flex items-center justify-center px-8 py-2 border border-transparent text-lg font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-3 md:text-lg md:px-10"
          >
            Subscribe
          </button>
        </div>
        </motion.div>
    </div>
  )
}

export default Subscribe