import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import people20Regular from "@iconify/icons-fluent/people-20-regular";
import apps20Regular from "@iconify/icons-fluent/apps-20-regular";
import branchFork20Regular from "@iconify/icons-fluent/branch-fork-20-regular";
import siteConfig from "../site.config";

const StatsCard = ({ name, value, icon }) => {
  return (
    <div className="p-6 w-full bg-pastel/20 rounded-lg shadow-md">
      <Icon icon={icon} className="h-12 w-12 mb-4 text-slate-200" />
      <h2 className="font-bold sm:text-4xl text-3xl text-slate-300">{value}</h2>
      <p className="leading-relaxed text-slate-400">{name}</p>
    </div>
  );
};

const Statistics = () => {
  const { stats } = siteConfig;
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    projects: 0,
    commits: 0,
  });

  const targetStats = {
    members: stats.members,
    projects: stats.projects,
    commits: stats.commits,
  };

  useEffect(() => {
    const membersInterval = setInterval(() => {
      setAnimatedStats((prevStats) => ({
        ...prevStats,
        members:
          prevStats.members < targetStats.members
            ? prevStats.members + 10
            : targetStats.members,
      }));
    }, 50); 
    const projectsInterval = setInterval(() => {
      setAnimatedStats((prevStats) => ({
        ...prevStats,
        projects:
          prevStats.projects < targetStats.projects
            ? prevStats.projects + 1
            : targetStats.projects,
      }));
    }, 50);

    const commitsInterval = setInterval(() => {
      setAnimatedStats((prevStats) => ({
        ...prevStats,
        commits:
          prevStats.commits < targetStats.commits
            ? prevStats.commits + 1
            : targetStats.commits,
      }));
    }, 50); 

    return () => {
      clearInterval(membersInterval);
      clearInterval(projectsInterval);
      clearInterval(commitsInterval);
    };
  }, [targetStats]);

  return (
    <section className="py-18 lg:py-24 bg-[#0c1b38]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-8 px-4 sm:px-6 lg:px-8">
        <StatsCard
          name="Members"
          value={`${animatedStats.members}+`}
          icon={people20Regular}
        />
        <StatsCard
          name="Projects"
          value={`${animatedStats.projects}+`}
          icon={apps20Regular}
        />
        <StatsCard
          name="Commits"
          value={`${animatedStats.commits}K+`}
          icon={branchFork20Regular}
        />
      </div>
    </section>
  );
};

export default Statistics;
