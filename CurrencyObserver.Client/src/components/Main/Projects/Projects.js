import React, { useEffect, useState } from "react";
import Title from "./Title";
import Search from "./Search";
import ProjectsTable from "./ProjectsTable";
import { Project } from "../../../models/project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Завантаження проектів
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("./data/myProjects.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const projectsData = await response.json();

        const loadedProjects = projectsData.map(
          (data) =>
            new Project(
              data.name,
              data.startDate,
              data.durationMonths,
              data.country,
              data.description
            )
        );

        setProjects(loadedProjects);
        setFilteredProjects(loadedProjects); // Ініціалізація фільтрованих проектів
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Обробка пошуку
  const handleSearch = (searchTerm) => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <section className="my-projects-page" id="my-projects-page">
      <Title />
      <div className="options-block">
        <Search onSearch={handleSearch} />
      </div>
      <div className="projects">
        <ProjectsTable projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
