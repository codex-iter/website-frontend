import React from "react";

export default function Newsletter(props) {
  return (
    <>
    <section className="py-16 lg:py-32 bg-[#0c1b38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-pastel sm:text-5xl mb-8">
            Join our monthly newsletter
          </h1>
          <button
            className="w-full max-w-sm mx-auto flex items-center justify-center px-8 py-2 border border-transparent text-lg font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-4 md:text-lg md:px-10"
            onClick={()=>props.handle(true)}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
