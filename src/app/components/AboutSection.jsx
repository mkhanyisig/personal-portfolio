"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ExperienceSection from "./ExperienceSection";

const educationItems = [
  {
    organization: "Brandeis University",
    role: "MS in Computer Science",
    date: "August 2021 - May 2023",
    logo: "/images/brandeis2.png",
  },
  {
    organization: "Colby College",
    role: "BS in Computer Science & Physics: Astrophysics",
    date: "August 2015 - May 2019",
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
      <ul className="list-disc pl-2">
        <li>Full Stack Engineer, Electives Inc, Feb 2023 - </li>
        <li>
          Software Engineer Intern/Coop, HubSpot Inc, June 2022 - August 2022
        </li>
        <li>Software Engineer, Prospector Portal, June 2020 - December 2022</li>
      </ul>
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
        <Image src="/images/grad.jpeg" alt="MK grad" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700  to-red-900">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg ">
            I am a software engineer with a passion for creating software
            solutions that solve real-world problems. I have experience in
            full-stack web development. I am proficient in JavaScript,
            TypeScript, Python, and Java. I am also familiar with cloud
            platforms, mainly AWS. I am a quick learner and a team player. I am
            always eager to learn new technologies and improve my skills.
          </p>
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
          <div className="mt-8">
            <ExperienceSection
              title="Education"
              items={educationItems}
              isBackgroundDark={isBackgroundDark}
            />

            <ExperienceSection
              title="Work Experience"
              items={workItems}
              isBackgroundDark={isBackgroundDark}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
