import React from "react";
import { Project } from "../../models/projects.model";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <Card className="p-2 bg-[#F5F5F5] dark:bg-[#282828]" shadow="none">
      <CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-[180px]"
          src={project.img}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-medium text-large">{project.name}</h4>
        <a href={project.link} target="_blank" rel="noreferrer">
          <small className="flex text-default-500 gap-1 items-center hover:font-semibold">
            <FaEye />
            Git Hub
          </small>
        </a>
        <p className="pt-2 text-sm font-normal w-[250px] ">
          {t(project.description)}
        </p>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
