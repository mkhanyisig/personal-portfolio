'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import ExperienceSection from './ExperienceSection';
import Link from 'next/link';

const educationItems = [
  {
    organization: 'Brandeis University',
    role: 'MS in Computer Science',
    date: '2021 - 2023',
    logo: '/images/brandeis2.png',
    url: 'https://www.brandeis.edu/computer-science/',
  },
  {
    organization: 'Colby College',
    role: 'BS in Computer Science & Physics: Astrophysics',
    date: '2015 - 2019',
    logo: '/images/colby2.png',
    url: 'https://www.colby.edu/academics/departments-and-programs/physics-and-astronomy/',
  },
  {
    organization: 'Tuck School of Business at Dartmouth College',
    role: 'Business Bridge Program',
    date: 'Summer 2018',
    logo: '/images/tuck2.png',
    url: 'https://bridge.tuck.dartmouth.edu/',
  },
];

const workItems = [
  {
    organization: '',
    role: 'Software Engineer  - Backend',
    date: '2024 - ',
    logo: 'https://pbs.twimg.com/profile_images/1517594757492580352/mO6w0tZo_400x400.png',
    url: '',
  },
  {
    organization: 'Electives Inc',
    role: 'Full Stack Engineer',
    date: '2023 - 2024',
    logo: '/images/electives2.png',
    url: 'https://www.electives.io/',
  },
  {
    organization: 'HubSpot Inc',
    role: 'Software Engineer Intern/Coop',
    date: '2022',
    logo: '/images/hubspot.png',
    url: 'https://www.hubspot.com/',
  },
  {
    organization: 'Prospector Portal',
    role: 'Software Engineer',
    date: '2020-2022',
    logo: '/images/prospector.png',
    url: 'https://www.prospectorportal.com/',
  },
  {
    organization: 'Brandeis University',
    role: 'Graduate Research/Teaching Assistant',
    date: '2021-2022',
    logo: '/images/brandeis2.png',
    url: 'https://www.brandeis.edu/computer-science/',
  },
  {
    organization: 'The Jackson Laboratory',
    role: 'Software Engineer Intern',
    date: '2019',
    logo: '/images/jax3.png',
    url: 'https://www.jax.org/',
  },
];

const TAB_DATA = [
  {
    title: 'Work',
    id: 'work',
    content: (
      <div>
        <p>
          I’ve built my career in small, fast-moving teams focusing on problem
          solving for various stakeholders, delivering full-stack features and
          zero-to-one projects from concept to deployment. I focus on building
          efficient, scalable solutions, often automating workflows and
          integrating third-party APIs or cloud services. I’m passionate about
          continuous learning and contributing to impactful, forward-thinking
          engineering teams.
        </p>
      </div>
    ),
    colorStyling: 'text-yellow-700 hover:text-yellow-400',
  },
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div>
        I build across the stack, with experience in web applications, data
        processing, and automation. I’m comfortable working within enterprise
        systems and modern frameworks for both frontend and backend development,
        using
        <br />
        <b className="text-yellow-700">
          Python, JavaScript/TypeScript, and Java
        </b>
        <br />
        as my core languages.
      </div>
    ),
    colorStyling: 'text-red-700 hover:text-red-400',
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div>
        <p>
          My MS and BS in Computer Science have strengthened my problem-solving
          abilities and foundation in computational thinking. I stay committed
          to continuous learning, adapting quickly to new technologies and
          evolving industry trends to keep my skills current and impactful.
        </p>
      </div>
    ),
    colorStyling: 'text-blue-700 hover:text-blue-400',
  },
];

const AboutSection = ({ isBackgroundDark }) => {
  const [tab, setTab] = useState('skills');
  const [autoSwitchTab, setAutoSwitchTab] = useState(true);

  useEffect(() => {
    if (autoSwitchTab) {
      const intervalId = setInterval(() => {
        const currentIndex = TAB_DATA.findIndex((item) => item.id === tab);
        const nextIndex = (currentIndex + 1) % TAB_DATA.length;

        setTab(TAB_DATA[nextIndex].id);
      }, 5000);

      return () => clearInterval(intervalId);
    } else {
      return;
    }
  }, [tab, autoSwitchTab]);

  const handleTabChange = (tabID) => {
    setTab(tabID);
    setAutoSwitchTab(false);
  };

  return (
    <section
      className={` ${
        isBackgroundDark ? 'bg-[#121212]' : 'bg-white'
      } lg:h-full lg:w-full`}
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div>
          <Image
            className="mt-10"
            src="/images/grad.jpeg"
            alt="MK grad"
            width={400}
            height={400}
          />
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                active={tab === tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                tcolor={`${tabItem.colorStyling}`}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div
            className="mt-4 "
            style={{ height: '380px', maxHeight: '400px', overflowY: 'auto' }}
          >
            <div
              className={`${
                isBackgroundDark ? 'text-neutral-300' : 'text-neutral-700'
              } font-bold `}
            >
              {TAB_DATA.find((tabItem) => tabItem.id === tab).content}
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
              work={false}
            />

            <ExperienceSection
              title="Work"
              items={workItems}
              darkMode={isBackgroundDark}
              work={true}
            />
          </div>
          <Link href="#contact">
            <button className="px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-900 to-red-300 hover:bg-slate-800 mt-3">
              <span className="text-red-700 block text-lg bg-gray-100 hover:bg-gray-300 rounded-full px-4 py-2 font-extrabold">
                Resume
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
