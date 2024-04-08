import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ProjectsList from "../../components/lists/ProjectsList";
import FooterMain from "../../components/footers/FooterMain";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <HeaderTitle
        title="Projects"
        description="Sample of some developed projects"
      />
      <ProjectsList />
      <FooterMain />
    </div>
  );
};

export default ProjectsPage;
