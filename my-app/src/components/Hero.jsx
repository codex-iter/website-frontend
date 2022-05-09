import React from "react";
import ContactInfo from "./ContactInfo";
import siteConfig from "../site.config";

import banner from "../assets/images/banner.png";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-cib/github";

export default function Hero() {
  return (
    <div className="pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <main className="pt-4 mx-auto max-w-7xl px-4 sm:px-6 md:pt-8 lg:pt-10 lg:px-8 xl:pt-14">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="mb-3 text-base text-slate-400 sm:mb-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A Community of Coders from ITER
            </p>
            <h1 className="text-4xl tracking-tight font-extrabold text-pastel sm:text-5xl md:text-6xl">
              we code, <br /> we explore.{" "}
            </h1>
            <div className="max-w-xl mx-auto my-6 lg:my-8">
              <ContactInfo className="justify-center" />
            </div>

            <div className="mt-12 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-lg shadow">
                <a
                  href={siteConfig.contacts.github}
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-semibold rounded-lg text-slate-800 bg-secondary hover:scale-105 will-change-transform transition-transform md:py-3 md:text-lg md:px-8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon={githubIcon} className="h-6 w-6 mr-2" />
                  Visit github
                </a>
              </div>
            </div>
          </div>
          <div className="h-full lg:mt-0 flex items-center justify-center lg:w-1/2">
            <img className="max-w-2xl w-full h-full" src={banner} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
