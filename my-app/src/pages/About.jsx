import React from "react";
import GroupMembers from "../assets/images/about.png";
import siteConfig from "../site.config";

const About = () => {
  return (
    <section className="pb-12">
      <div className="flex items-center justify-center">
        <img src={GroupMembers} alt="codex group members" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row py-12 gap-3">
        <div className="lg:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-pastel text-left sm:text-5xl md:text-6xl">
            Our story
          </h1>
          <div className="space-y-8 text-lg leading-8 mt-8 text-slate-200">
            <p>
              We here at codex are identified as coders only because we know
              what it takes to start from scratch and keep on scratching till we
              achieve our goals.
            </p>
            <p>
              We have seen our aluminis sharpen their skills, work in teams,
              brainstorm ideas and get placed in fortune companies. Our goal is
              not to teach anyone rather, learn together.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3">
          <h2 className="mb-6 text-3xl text-center tracking-tight font-bold sm:text-4xl text-white mt-28">
            Join our monthly newsletter
          </h2>
          <a
            href={siteConfig.newsletterUrl}
            className="w-full max-w-xs mx-auto flex items-center justify-center px-8 py-2 border border-transparent text-lg font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-3 md:text-lg md:px-4"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
