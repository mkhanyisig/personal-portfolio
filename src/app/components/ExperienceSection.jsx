import React from "react";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const ExperienceItem = ({ organization, role, date, logo, darkMode, url, work }) => {
  const darkTextColorClass = darkMode ? "text-white" : "text-zinc-900";
  const lightTextColorClass = darkMode ? "text-zinc-100" : "text-zinc-700";
  const hoverTextColorClass = !work ? "hover:text-blue-500" : "hover:text-red-500";

  return (
    <li className="flex gap-5">
      <div className="relative mt-1 flex h-15 w-15 flex-none items-center justify-center rounded-full">
        <img
          src={logo}
          alt={organization}
          className="h-12 w-12 object-cover rounded-full"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Organization</dt>
        <dd
          className={`w-full flex-none text-sm font-medium ${darkTextColorClass} ${hoverTextColorClass} hover:text-lg`}
        >
          <a href={url} target="_blank" rel="noreferrer">
          {organization}
          </a>
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className={`text-xs font-semibold ${lightTextColorClass}`}>
          {role}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className={`ml-auto text-xs ${lightTextColorClass}`}
          aria-label={`${date} until ${date}`}
        >
          <time dateTime={date}>{date}</time>
        </dd>
      </dl>
    </li>
  );
};

const ExperienceSection = ({ title, id, items, darkMode, work }) => {
  return (
    <section className="text-white py-1 " id={id}>
      <div className="rounded-2xl border border-gray-800 p-3 dark:border-zinc-400">
        {title === "Work" ? (
          <h2 className="flex text-xl font-bold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-12 w-12 text-red-800" />
            <span className="ml-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">
              {title}
            </span>
          </h2>
        ) : (
          <h2 className="flex text-xl font-bold text-zinc-900 dark:text-zinc-100">
            <AcademicCapIcon className="h-12 w-12  text-blue-700" />
            <span className="ml-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              {title}
            </span>
          </h2>
        )}

        <ol className="mt-6 space-y-3">
          {items.map((item, index) => (
            <ExperienceItem key={index} darkMode={darkMode}  {...item} work={work}/>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
