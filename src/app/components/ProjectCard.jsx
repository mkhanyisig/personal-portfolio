import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  demoLink,
  repoLink,
  techStack,
}) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden project-card_thumbnail"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
        alt={title}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {demoLink && (
            <Link
              href={demoLink}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          )}
          <Link
            href={repoLink}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div
        className="bg-[#181818] rounded-b-xl py-6 px-4 text-white"
        style={{ height: "14em" }}
      >
        <h5 className="font-lg font-semibold">{title}</h5>
        <div>
          <p className="text-[#ADB7BE] overflow-hidden line-clamp-6">
            {description}
          </p>
        </div>
      </div>
      <style jsx global>{`
        .project-card_thumbnail {
          transition: transform 0.4s ease-in-out;
          transform: scale(1);
        }

        .project-card_thumbnail:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
