import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "../lib/classNames";
import groupBy from "../lib/groupBy";
import { API_URL } from "../lib/constants";

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
  status = "upcoming",
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

const LoadingSkeleton = () => {
  return (
    <div className="py-12 flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-wrap">
      <div className="w-full md:w-2/3">
        <div className="h-12 w-full md:w-1/3 bg-slate-400 rounded mb-12 animate-pulse" />
        <div className="h-12 w-full md:w-2/3 bg-slate-400 rounded mb-12 animate-pulse" />
      </div>
      <div className="w-full md:w-1/3 flex justify-end">
        <div className="h-96 w-96 bg-slate-400 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default function Events() {
  let [categories, setCategories] = useState({
    Upcoming: [],
    Live: [],
    Past: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        // `https://codex-backend-v2.herokuapp.com/events`
        `${API_URL}/events`
      );
      const events = await response.json();
      const groupedEvents = groupBy(events, "status");
      setCategories({
        Upcoming: groupedEvents?.upcoimg || [],
        Live: groupedEvents?.live || [],
        Past: groupedEvents?.past || [],
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

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
            {loading ? (
              <LoadingSkeleton />
            ) : (
              Object.values(categories).map((events, idx) => (
                <Tab.Panel key={idx}>
                  {events.length === 0 && (
                    <h1 className="text-pastel text-center pt-8">
                      There are no such events. Come back later. 
                      <br/>
                      Till then have a look on our past events.
                    </h1>
                  )}
                  {events.map(
                    (
                      {
                        id,
                        name,
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
                        title={name}
                        status={status}
                        description={description}
                        organizers={organizers}
                        link={link}
                        images={images}
                      />
                    )
                  )}
                </Tab.Panel>
              ))
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
