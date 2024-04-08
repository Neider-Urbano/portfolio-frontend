import { projectsData } from "../../utils/dataProjects";
import ProjectCard from "../cards/ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex gap-5 w-full flex-wrap">
      {projectsData.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectsList;
