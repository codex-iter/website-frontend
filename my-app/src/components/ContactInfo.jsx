import React from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-cib/github";
import linkedinIcon from "@iconify/icons-cib/linkedin-in";
import youtubeIcon from "@iconify/icons-cib/youtube";
import facebookIcon from "@iconify/icons-cib/facebook";
import instagramIcon from "@iconify/icons-cib/instagram";
import siteConfig from "../site.config";

const ContactInfo = ({ className }) => {
  const { contacts } = siteConfig;
  return (
    <div
      className={
        "flex space-x-4 text-slate-500 items-center lg:justify-start " +
        className
      }
    >
      <a
        href={contacts.github}
        className="hover:text-slate-300"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={githubIcon} className="h-6 w-6" />
      </a>
      <a
        href={contacts.instagram}
        className="hover:text-slate-300"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={instagramIcon} className="h-6 w-6" />
      </a>
      <a
        href={contacts.linkedin}
        className="hover:text-slate-300"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={linkedinIcon} className="h-6 w-6" />
      </a>
      <a
        href={contacts.youtube}
        className="hover:text-slate-300"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={youtubeIcon} className="h-6 w-6" />
      </a>
      <a
        href={contacts.facebook}
        className="hover:text-slate-300"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={facebookIcon} className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ContactInfo;
