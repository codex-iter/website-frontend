import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "../lib/classNames";

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
          <img className="rounded-lg" src={img} alt={img} />
        </div>
      ))}
    </Slider>
  );
};

const Event = ({
  reverse,
  title,
  description,
  organizers,
  link,
  images,
  status = "live",
}) => {
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
              {title}
            </h1>
            {status === "live" && (
              <span className="ml-4 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 uppercase">
                {status}
              </span>
            )}
            {status === "upcoming" && (
              <span className="ml-4 bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 uppercase">
                {status}
              </span>
            )}
            {status === "past" && (
              <span className="ml-4 bg-slate-100 text-slate-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-slate-800 uppercase">
                {status}
              </span>
            )}
          </div>
          <p className="mt-6 text-slate-300">{description}</p>
          <h3 className="inline-block text-xl font-semibold text-slate-300 my-3">
            Organisers
          </h3>
          <ul className="text-slate-300 mb-8">
            {organizers.map((organizer) => (
              <li key={organizer}>{organizer}</li>
            ))}
          </ul>
          <a
            href={link}
            className="text-slate-800 bg-secondary  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        </div>
        <EventSilder className="w-full md:w-1/3" images={images} />
      </div>
    </section>
  );
};

export default function Events() {
  let [categories] = useState({
    Live: [
      {
        id: 1,
        title: "Codex-CTF",
        description:
          "A fun filled week of learning hacking and competion worth winning. We had 3 winners for the final event each receiving goodies from over sponsers and a certificate signed by our HOD maam.",
        organizers: ["codex-iter", "geeksforgeeks", "coding ninjas"],
        images: [
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/b693956cdea637352c418142c957574f67f84e4c.jpeg?alt=media&token=40d60907-6190-45f1-814a-be82b8adab33",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/3e170696ee8bcc26ecb1c967adddaa3b728a427a.jpeg?alt=media&token=2328b0ec-3c49-42ee-ba52-e1a74d1c9d2f",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/01ef0c7a2e3a71e00e3c5fb6556a1e5f164628cd.jpeg?alt=media&token=0408d9e1-c029-40ac-92e1-a3bdfcb79a91",
        ],
        link: "https://github.com",
        status: "live",
      },
    ],
    Upcoming: [
      {
        id: 2,
        title: "Codex-CTF 1",
        description:
          "A fun filled week of learning hacking and competion worth winning. We had 3 winners for the final event each receiving goodies from over sponsers and a certificate signed by our HOD maam.",
        organizers: ["codex-iter", "geeksforgeeks", "coding ninjas"],
        images: [
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/b693956cdea637352c418142c957574f67f84e4c.jpeg?alt=media&token=40d60907-6190-45f1-814a-be82b8adab33",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/3e170696ee8bcc26ecb1c967adddaa3b728a427a.jpeg?alt=media&token=2328b0ec-3c49-42ee-ba52-e1a74d1c9d2f",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/01ef0c7a2e3a71e00e3c5fb6556a1e5f164628cd.jpeg?alt=media&token=0408d9e1-c029-40ac-92e1-a3bdfcb79a91",
        ],
        link: "https://github.com",
        status: "upcoming",
      },
      {
        id: 3,
        title: "Codex-CTF 2",
        description:
          "A fun filled week of learning hacking and competion worth winning. We had 3 winners for the final event each receiving goodies from over sponsers and a certificate signed by our HOD maam.",
        organizers: ["codex-iter", "geeksforgeeks", "coding ninjas"],
        images: [
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/b693956cdea637352c418142c957574f67f84e4c.jpeg?alt=media&token=40d60907-6190-45f1-814a-be82b8adab33",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/3e170696ee8bcc26ecb1c967adddaa3b728a427a.jpeg?alt=media&token=2328b0ec-3c49-42ee-ba52-e1a74d1c9d2f",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/01ef0c7a2e3a71e00e3c5fb6556a1e5f164628cd.jpeg?alt=media&token=0408d9e1-c029-40ac-92e1-a3bdfcb79a91",
        ],
        link: "https://github.com",
        status: "upcoming",
      },
    ],
    Past: [
      {
        id: 4,
        title: "Codex-CTF -1",
        description:
          "A fun filled week of learning hacking and competion worth winning. We had 3 winners for the final event each receiving goodies from over sponsers and a certificate signed by our HOD maam.",
        organizers: ["codex-iter", "geeksforgeeks", "coding ninjas"],
        images: [
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/b693956cdea637352c418142c957574f67f84e4c.jpeg?alt=media&token=40d60907-6190-45f1-814a-be82b8adab33",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/3e170696ee8bcc26ecb1c967adddaa3b728a427a.jpeg?alt=media&token=2328b0ec-3c49-42ee-ba52-e1a74d1c9d2f",
          "https://firebasestorage.googleapis.com/v0/b/codex-website-6a27d.appspot.com/o/01ef0c7a2e3a71e00e3c5fb6556a1e5f164628cd.jpeg?alt=media&token=0408d9e1-c029-40ac-92e1-a3bdfcb79a91",
        ],
        link: "https://github.com",
        status: "past",
      },
    ],
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-pastel sm:text-5xl text-center">
          Events organized by our community
        </h1>
      </div>

      <div className="w-full py-12">
        <Tab.Group>
          <div className="px-4 sm:px-6 lg:px-8">
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-md mx-auto">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="py-12">
            {Object.values(categories).map((events, idx) => (
              <Tab.Panel key={idx}>
                {events.map(
                  (
                    {
                      id,
                      title,
                      status,
                      description,
                      organizers,
                      images,
                      link,
                    },
                    index
                  ) => (
                    <Event
                      key={id}
                      reverse={index & 1}
                      title={title}
                      status={status}
                      description={description}
                      organizers={organizers}
                      link={link}
                      images={images}
                    />
                  )
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      {/* <Event />
      <Event reverse />
      <Event status="past" /> */}
    </div>
  );
}
