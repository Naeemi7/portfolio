import "../../styles/main.scss";
import projectData from "../../data/project-data";
import ProjectCards from "../Helper/ProjectCards";

function Project() {
  return (
    <div className="project-container">
      <div className="bg-gray-100 dark:bg-primary py-6 px-4 md:py-10 md:px-12">
        <div className="text-center mt-8 mb-11">
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
