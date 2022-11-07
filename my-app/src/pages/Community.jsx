import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-cib/github";
import twitterIcon from "@iconify/icons-cib/twitter";
import linkedinIcon from "@iconify/icons-cib/linkedin-in";
import { API_URL } from "../lib/constants";
import groupBy from "../lib/groupBy";
import { toTitleCase } from "../lib/string";
import classNames from "../lib/classNames";

const UserCard = ({ name, skill, img, github, linkedin, twitter }) => {
  const isUrl = (str) => {
    return str.startsWith("http");
  };
  return (
    <div className="w-64">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          className="h-32 w-32 rounded-full"
          src={isUrl(img) ? img : `https://${img}`}
          alt={name}
        />
        <h1 className="font-semibold text-2xl mt-2 text-slate-300">
          {toTitleCase(name)}
        </h1>
        <h4 className="text-base text-slate-500">{skill}</h4>
        <div className="flex space-x-4 text-slate-500 items-center justify-center lg:justify-start mt-6">
          {github ? (
            <a
              href={isUrl(github) ? github : `https://${github}`}
              className="hover:text-slate-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={githubIcon} className="h-6 w-6" />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={isUrl(linkedin) ? linkedin : `https://${linkedin}`}
              className="hover:text-slate-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={linkedinIcon} className="h-6 w-6" />
            </a>
          ) : null}

          {twitter ? (
            <a
              href={isUrl(twitter) ? twitter : `https://${twitter}`}
              className="hover:text-slate-300"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={twitterIcon} className="h-6 w-6" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  const LoadingUser = () => (
    <div className="space-y-4 animate-puls ">
      <div className="h-32 w-32 bg-slate-400 rounded-full mx-auto" />
      <div className="h-8 w-full bg-slate-400 rounded" />
      <div className="h-6 w-full bg-slate-400 rounded" />
    </div>
  );
  return (
    <div className="py-12">
      <div className="h-12 w-full mx-auto md:w-1/3 bg-slate-400 rounded mb-12 animate-pulse" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
        {Array.from({ length: 4 }, (_, i) => (
          <LoadingUser key={i} />
        ))}
      </div>
    </div>
  );
};

const Members = () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch(
        "https://codex-backend-v2.herokuapp.com/members"
      );
      const members = await response.json();
      setMembers(groupBy(members, "role"));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <section>
            <h2 className="text-2xl tracking-tight font-extrabold text-slate-300 text-center sm:text-3xl md:text-4xl py-16">
              FACULTY CO-ORDINATORS
            </h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {members.teacher?.map(
                ({ id, name, githubDP, linkedin, github, twitter, skill }) => (
                  <UserCard
                    key={id}
                    name={name}
                    img={githubDP}
                    skill={skill}
                    linkedin={linkedin}
                    github={github}
                    twitter={twitter}
                  />
                )
              )}
            </div>
          </section>
          <section>
            <h2 className="text-2xl tracking-tight font-extrabold text-slate-300 text-center sm:text-3xl md:text-4xl py-16">
              STUDENT CO-ORDINATORS
            </h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {members.coordinator?.map(
                ({ id, name, githubDP, linkedin, github, twitter, skill }) => (
                  <UserCard
                    key={id}
                    name={name}
                    img={githubDP}
                    skill={skill}
                    linkedin={linkedin}
                    github={github}
                    twitter={twitter}
                  />
                )
              ).sort(() => Math.random() - 0.5)}
            </div>
          </section>
          <section>
            <h2 className="text-2xl tracking-tight font-extrabold text-slate-300 text-center sm:text-3xl md:text-4xl py-16">
              CODERS
            </h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {members.member?.map(
                ({ id, name, githubDP, linkedin, github, twitter, skill }) => (
                  <UserCard
                    key={id}
                    name={name}
                    img={githubDP}
                    skill={skill}
                    linkedin={linkedin}
                    github={github}
                    twitter={twitter}
                  />
                )
              ).sort(() => Math.random() - 0.5)}
            </div>
          </section>
        </>
      )}
    </>
  );
};

const Almunus = () => {
  const [loading, setLoading] = useState(true);
  const [almunus, setAlmunus] = useState([]);

  useEffect(() => {
    fetchAlmunus();
  }, []);

  const fetchAlmunus = async () => {
    try {
      const response = await fetch(`${API_URL}/getAlumni`);
      const almunus = await response.json();
      setAlmunus(almunus);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <section>
            <h2 className="text-2xl tracking-tight font-extrabold text-slate-300 text-center sm:text-3xl md:text-4xl py-12">
              Our Alumni
            </h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {almunus?.map(
                ({ _id, name, githubDP, linkedin, github, twitter, skill }) => (
                  <UserCard
                    key={_id}
                    name={name}
                    img={githubDP}
                    skill={skill}
                    linkedin={linkedin}
                    github={github}
                    twitter={twitter}
                  />
                )
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default function Community() {
  const [categories] = useState(["Members", "Almunus"]);

  return (
    <div className="py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-pastel text-center sm:text-5xl md:text-6xl">
          Meet our community
        </h1>

        <div className="w-full py-12 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-md mx-auto">
              {categories.map((category) => (
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
            <Tab.Panels className="mt-2">
              {categories.map((posts, idx) => (
                <Tab.Panel key={idx}>
                  {posts === "Members" ? <Members /> : <Almunus />}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
