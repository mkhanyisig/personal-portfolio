import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "Brandeis Apartment Search",
    description:
      "Brandeis Apartment Search is a two-sided platform where both landlords can post their listing to specifcally Brandeis students and Brandeis students can find housing near campus. We want to create a centralized platform safe for Brandeis students with verfied housing as well as landlord reviews so people can see what they're getting into.",
    imageUrl: "/images/brandeisApartmentSearch.png",
    repoLink:
      "https://drive.google.com/drive/folders/18_WBurlnf1uv1L9oIhv2ox87tU8g3PFK?usp=drive_link",
    demoLink: "https://blooming-waters-59803.herokuapp.com/",
    techStack: ["Ruby on Rails", "PostgreSQL", "Heroku"],
    tags: ["All", "Web"],
  },
  {
    id: 2,
    title: "Database Management System GUI",
    description:
      "US Forestry Registry CRUD GUI. A Java application that connects to a PostgreSQL database to perform CRUD operations on the US Forestry Registry database. The application allows users to view, add, update, and delete data from the database.",
    imageUrl: "/images/DBMS_GUI.png",
    repoLink: "https://github.com/mkhanyisig/DBMS_GUI",
    demoLink: null,
    techStack: ["Java", "PostgreSQL", "JDBC"],
    tags: ["All", "GUI"],
  },
  {
    id: 3,
    title: "Data Analysis and Visualization GUI",
    description:
      "Built an application using python that can visualize data sets in 3D coordinate. 6 dimensions represented when adding size, color and shape.Implemented data analysis functions including  PCA analysis, Regression, clustering, machine learning",
    imageUrl: "/images/datavizGUI.png",
    repoLink:
      "https://github.com/mkhanyisig/Visualizing-the-impact-of-HIV-AIDS-in-Southern-Africa",
    demoLink: null,
    techStack: ["Python", "Pandas", "Matplotlib", "tkinter"],
    tags: ["All", "GUI", "Data / Machine Learning"],
  },
  {
    id: 6,
    title: "Covid-19 Swaziland cases Geo-Visualization",
    description:
      "On this project I built out a Geo-Visualization of Covid-19 cases in Swaziland using a customized GeoJSON, visualitaion and data loader functions. I sourced the data from the reports by Ministry of Health and the World Health Organization.",
    imageUrl: "/images/covidGeoMap.png",
    repoLink: "https://github.com/mkhanyisig/covidGeoMapEswatini/tree/master",
    demoLink: "/covidGeoMapEswatini/index.html",
    techStack: ["JavaScript", "D3.js", "GeoJSON", "HTML", "CSS"],
    tags: ["All", "Web"],
  },
  {
    id: 9,
    title: "Personal Portfolio Website",
    description:
      "Developed from scratch using NextJS, ReactJS, TailwindCSS, and Heroicons. The website is designed to be responsive, with dynamic styling and accessible on all devices.",
    imageUrl: "/images/portfolio.png",
    repoLink: "https://github.com/mkhanyisig/personal-portfolio",
    demoLink: "/",
    techStack: ["NextJS", "ReactJS", "TailwindCSS", "Typescript", "NodeJS"],
    tags: ["All", "Web"],
  },
  {
    id: 5,
    title: "Falcon",
    description:
      "An endless flyer game similar to Flappy Bird developed using Python and Pygame. the main objective is to find the nest at the end of the terrain within each level's landscapes and flying objects that can impede progress. Computer Game Design project",
    imageUrl: "/images/falcon.png",
    repoLink: "https://github.com/mkhanyisig/Falcon-",
    demoLink:
      "https://www.linkedin.com/pulse/falcon-vision-brought-life-gerald-nvule/",
    techStack: ["Python", "Pygame"],
    tags: ["All", "Game"],
  },
  {
    id: 7,
    title: "Geospatial Visualization of Mineral resource details",
    description:
      "Early Exploratory Proof Of Concept (POC) Visualizations of publicly sourced mineral resource data in the US. The data was sourced from the USGS and the visualization was done using using the Google Maps API tools",
    imageUrl: "/images/prospectorGeoMaps.png",
    repoLink: "https://github.com/mkhanyisig/prospector_geomaps",
    demoLink: null,
    techStack: ["JavaScript", "Google Maps API", "HTML", "CSS"],
    tags: ["All", "Web", "Data / Machine Learning"],
  },
  {
    id: 8,
    title: "Linkedin Data Scraper and Mapping",
    description:
      "A Python Selenium Webdriver scraper crawls linkedin pages for predefined linkedin company profiles and scrapes the data. The data then used internal to build profiles or other proprietary analysis",
    imageUrl: "/images/linkedinScraping.png",
    repoLink: "https://github.com/mkhanyisig/LinkedinSraper_PRospector",
    demoLink: null,
    techStack: ["Python", "Selenium", "BeautifulSoup"],
    tags: ["All", "Data / Machine Learning", "Web"],
  },

  {
    id: 4,
    title: "Gym Buddy Workouts 💪 App",
    description:
      "Gym Buddy Workouts is designed to be an assisitive gym app helping track workouts during session and log body health data.",
    imageUrl: "/images/gymBuddy.png",
    repoLink:
      "https://github.com/mkhanyisig/gym_buddy_App?tab=readme-ov-file#gym-buddy-workouts---app",
    demoLink:
      "https://drive.google.com/drive/folders/1o3qHBni2Ecp0Pp5Sk2tYhLTwYsK611Td",
    techStack: ["React Native", "Expo"],
    tags: ["All", "Mobile", "Web"],
  },
];

const ProjectSection = ({ isBackgroundDark }) => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = ProjectsData.filter((project) =>
    project.tags.includes(activeTag)
  );

  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };

  return (
    <section
      className={` ${isBackgroundDark ? "bg-[#121212]" : "bg-white"} `}
      id="projects"
    >
      <div className="py-8 px-4">
        <h2 className="lg:text-6xl font-extrabold text-center py-8 mt-4 mb-8 md:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900  via-red-200 to-red-900">
            Projects
          </span>
        </h2>
        <p className="text-red-700 text-2xl text-center  font-bold ">
          Please click on the project Image to find links too either view live
          demo or the project repository
        </p>
        <div className={`flex flex-row justify-center gap-2 text-red-700 m-6`}>
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={activeTag === "All"}
            darkMode={isBackgroundDark}
          />
          <ProjectTag
            name="Web"
            onClick={handleTagChange}
            isSelected={activeTag === "Web"}
            darkMode={isBackgroundDark}
          />
          <ProjectTag
            name="GUI"
            onClick={handleTagChange}
            isSelected={activeTag === "GUI"}
            darkMode={isBackgroundDark}
          />
          <ProjectTag
            name="Data / Machine Learning"
            onClick={handleTagChange}
            isSelected={activeTag === "Data / Machine Learning"}
            darkMode={isBackgroundDark}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imageUrl}
              techStack={project.techStack}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              darkMode={isBackgroundDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
