"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ExperienceSection from "./ExperienceSection";

const educationItems = [
  {
    organization: "Brandeis University",
    role: "MS in Computer Science",
    date: "2021 - 2023",
    logo: "/images/brandeis2.png",
  },
  {
    organization: "Colby College",
    role: "BS in Computer Science & Physics: Astrophysics",
    date: "2015 - 2019",
    logo: "/images/colby2.png",
  },
  {
    organization: "Tuck School of Business at Dartmouth College",
    role: "Business Bridge Program",
    date: "July 2018",
    logo: "/images/tuck2.png",
  },
];

const workItems = [
  {
    organization: "Electives Inc",
    role: "Full Stack Engineer",
    date: "Feb 2023 - ",
    logo: "/images/electives2.png",
  },
  {
    organization: "HubSpot Inc",
    role: "Software Engineer Intern/Coop",
    date: "June 2022 - August 2022",
    logo: "/images/hubspot.png",
  },
  {
    organization: "Prospector Portal",
    role: "Software Engineer",
    date: "June 2020 - December 2022",
    logo: "/images/prospector.png",
  },
  {
    organization: "Brandeis University",
    role: "Graduate Research/Teaching Assistant",
    date: "October 2021 - Dec 2022",
    logo: "/images/brandeis2.png",
  },
  {
    organization: "The Jackson Laboratory",
    role: "Software Engineer Intern",
    date: "August 2019 - November 2019",
    logo: "/images/jax3.png",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Work",
    id: "work",
    content: (
      <p>
        I have worked mostly within startup environments in small autonomous
        teams
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> BS in Computer Science,Colby College, 2015 - 2019</li>
      </ul>
    ),
  },
];

const AboutSection = ({ isBackgroundDark }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tabID) => {
    console.log("tab change ID: ", tabID);
    startTransition(() => {
      setTab(tabID);
    });
  };

  return (
    <section
      className={isBackgroundDark ? "text-white" : "text-[#121212]"}
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div>
          <Image
            src="/images/grad.jpeg"
            alt="MK grad"
            width={500}
            height={500}
          />
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
              tcolor={"text-blue-600"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "work"}
              selectTab={() => handleTabChange("work")}
              tcolor={"text-red-600"}
            >
              {" "}
              Work{" "}
            </TabButton>

            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
              tcolor={"text-yellow-600"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700  to-red-900">
              About Me
            </span>
          </h2>
          <p className="text-xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
              Full Stack Software Engineer
            </span>
          </p>
          <div className="mt-2">
            <ExperienceSection
              title="Education"
              items={educationItems}
              darkMode={isBackgroundDark}
            />

            <ExperienceSection
              title="Work"
              items={workItems}
              darkMode={isBackgroundDark}
            />
          </div>
          <button className="px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-900 to-red-300 hover:bg-slate-800 mt-3">
            <span className="text-red-700 block text-lg bg-gray-100 hover:bg-gray-300 rounded-full px-4 py-2 font-extrabold">
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
