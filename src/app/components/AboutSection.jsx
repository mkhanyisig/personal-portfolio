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
      <div>
        <p>
          I've gained experience and exposure across diverse technology stacks
          and problem domains, primarily focusing on Web Applications, Data
          Processing, and Task Automation. My journey has involved mastering
          various frameworks, tools, and libraries. The primary programming
          languages I've worked with and am strongly proficient in are
          <br />
          <b className="text-yellow-700">
            Python, JavaScript/TypeScript, and Java.
          </b>
        </p>
      </div>
    ),
  },
  {
    title: "Work",
    id: "work",
    content: (
      <div>
        <p>
          My young career journey thus far has predominantly unfolded within
          research/class projects, small autonomous teams, and startup
          environments. I've owned end-to-end feature implementations and
          deployment, including ensuring Figma designs that match the final User
          Interface and are performant, reusable, and scalable solutions. Adept
          at automating tasks and orchestrating functions that utilize
          third-party API’s or cloud services, I've consistently delivered
          impactful solutions. I remain dedicated to continuous growth and
          innovation in software development.
        </p>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <p>
          My educational journey, which includes both an MS and a BS in Computer
          Science, has equipped me with robust problem-solving skills and a
          solid foundation in computational thinking. Recognizing the dynamic
          nature of the tech industry, I am deeply committed to continual
          self-improvement. I actively engage in self-study and seek out
          opportunities to learn new technologies, ensuring that my skills
          remain current and adaptable to industry demands.
        </p>
      </div>
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
      className={` ${
        isBackgroundDark ? "bg-[#121212]" : "bg-white"
      } lg:h-screen lg:w-full`}
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div>
          <Image
            src="/images/grad.jpeg"
            alt="MK grad"
            width={400}
            height={400}
          />
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
              tcolor={"text-yellow-700 hover:text-yellow-400"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "work"}
              selectTab={() => handleTabChange("work")}
              tcolor={"text-red-700 hover:text-red-400"}
            >
              {" "}
              Work{" "}
            </TabButton>

            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
              tcolor={"text-blue-700 hover:text-blue-400"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div
            className="mt-4 "
            style={{ height: "380px", maxHeight: "400px", overflowY: "auto" }}
          >
            <div
              className={`${
                isBackgroundDark ? "text-neutral-300" : "text-neutral-700"
              } font-bold `}
            >
              {tab === "skills" &&
                TAB_DATA.find((tab) => tab.id === "skills").content}
              {tab === "work" &&
                TAB_DATA.find((tab) => tab.id === "work").content}
              {tab === "education" &&
                TAB_DATA.find((tab) => tab.id === "education").content}
            </div>
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
