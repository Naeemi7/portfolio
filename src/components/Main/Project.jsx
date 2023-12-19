import "../../styles/main.scss";
import projectData from "../../data/project-data";
import ProjectCards from "../Helper/ProjectCards";

function Project() {
  return (
    <div className="project-container  ">
      <div className="min-h-screen bg-gray-100 dark:bg-primary pt-16 px-4 md:py-10 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center xl:m-16 mb-11 pt-5 ">
          <h2 className="text-4xl font-extrabold dark:text-h2Color">
            Projects
          </h2>
        </div>
        <div className="container mx-auto flex flex-row flex-wrap gap-8 justify-center">
          {projectData.map((data, index) => (
            <ProjectCards key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
