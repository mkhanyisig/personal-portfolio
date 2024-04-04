"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MS in Computer Science, Brandeis University, 2023</li>
        <li>
          BS in Physics: Astrophysics and Computer Science, Colby College, 2019
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/grad.jpeg" alt="MK grad" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
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
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
              tcolor={"text-yellow-600"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
              tcolor={"text-red-600"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
