import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventSilder = ({ images, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className={className}>
      {images.map((img, index) => (
        <div key={index} className="cursor-pointer">
          <img
            className="rounded-lg"
            src="https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/3e170696ee8bcc26ecb1c967adddaa3b728a427a.jpeg?alt=media&token=2328b0ec-3c49-42ee-ba52-e1a74d1c9d2f"
            alt="ok"
          />
        </div>
      ))}
    </Slider>
  );
};

const Event = ({ reverse, status = "live" }) => {
  return (
    <section className={`py-12 ${reverse ? null : "bg-[#0c1b38]"}`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse gap-8 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:w-2/3">
          <div className="flex items-center">
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-200">
              Codex-CTF
            </h1>
            {status === "live" ? (
              <span className="ml-4 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 uppercase">
                {status}
              </span>
            ) : (
              <span className="ml-4 bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 uppercase">
                {status}
              </span>
            )}
          </div>
          <p className="mt-6 text-slate-300">
            A fun filled week of learning hacking and competion worth winning.
            We had 3 winners for the final event each receiving goodies from
            over sponsers and a certificate signed by our HOD maam.
          </p>
          <h3 className="inline-block text-xl font-semibold text-slate-300 my-3">
            Organisers
          </h3>
          <ul className="text-slate-300 mb-8">
            <li>codex-iter</li>
            <li>geeksforgeeks</li>
            <li>coding ninjas</li>
          </ul>
          <a
            href="https://github.com"
            className="text-slate-800 bg-secondary  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        </div>
        <EventSilder className="w-full md:w-1/3" images={["A", "B", "C"]} />
      </div>
    </section>
  );
};

export default function Events() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-pastel sm:text-5xl text-center pb-16">
          Events organized by our community
        </h1>
      </div>
      <Event />
      <Event reverse />
      <Event status="past" />
    </div>
  );
}
