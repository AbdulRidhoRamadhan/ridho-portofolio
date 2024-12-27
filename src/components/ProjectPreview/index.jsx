import React from "react";
import style from "./style.module.scss";
import ProjectCard from "./ProjectCard";
import Rounded from "../RoundedButton";
import { ProjectsData } from "../../app/data/projects";
import Link from "next/link";
import Magnetic from "../magnetic";

const Projects = () => {
  const ProjectsList = ProjectsData.slice(0, 4);
  return (
    <div className={style.projects}>
      <h5 className={style.title}>Recent Projects</h5>
      {ProjectsList.map((item) => (
        <ProjectCard
          key={item.id}
          position={item.position}
          title={item.title}
          desc={item.desc}
          cat={item.cat}
          type={item.type}
          tech={item.tech}
          id={item.id}
        />
      ))}
      <Link href="/projects">
        <Rounded backgroundColor="#455CE9">
          <Magnetic>
            <p>More Projects</p>
          </Magnetic>
        </Rounded>
      </Link>
    </div>
  );
};

export default Projects;
