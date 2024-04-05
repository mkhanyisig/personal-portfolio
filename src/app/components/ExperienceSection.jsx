import React from "react";

const ExperienceItem = ({
  organization,
  role,
  date,
  logo,
  isBackgroundDark,
}) => {
  return (
    <li className="flex gap-5">
      <div className="relative mt-1 flex h-13 w-13 flex-none items-center justify-center rounded-full  ">
        <img
          src={logo}
          alt={organization}
          className="h-10 w-10 object-cover rounded-full"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Organization</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {organization}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${date} until ${date}`}
        >
          <time dateTime={date}>{date}</time>
        </dd>
      </dl>
    </li>
  );
};

const ExperienceSection = ({ title, id, items, isBackgroundDark }) => {
  return (
    <section className="text-white py-5" id={id}>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            ></path>
            <path
              d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
              className="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>
          <span className="ml-3">{title}</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {items.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
