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
    id: 4,
    title: "Gym Buddy Workouts 💪 App",
    description:
      "Gym Buddy Workouts is designed to be an assisitive gym app helping track workouts during session and log body health data.",
    imageUrl: "/images/gymBuddy.png",
    repoLink:
      "https://github.com/mkhanyisig/gym_buddy_App?tab=readme-ov-file#gym-buddy-workouts---app",
    demoLink:
      "https://github.com/mkhanyisig/gym_buddy_App?tab=readme-ov-file#gym-buddy-workouts---app",
    techStack: ["React Native", "Expo"],
    tags: ["All", "Mobile"],
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
        <div className="flex flex-row justify-center gap-2 text-white m-6">
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={activeTag === "All"}
          />
          <ProjectTag
            name="Web"
            onClick={handleTagChange}
            isSelected={activeTag === "Web"}
          />
          <ProjectTag
            name="GUI"
            onClick={handleTagChange}
            isSelected={activeTag === "GUI"}
          />
          <ProjectTag
            name="Data / Machine Learning"
            onClick={handleTagChange}
            isSelected={activeTag === "Data / Machine Learning"}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imageUrl}
              tags={project.tags}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
