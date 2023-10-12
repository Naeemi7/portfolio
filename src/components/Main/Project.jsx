import "../../styles/main.scss";
import projectData from "../../data/project-data";

function Card({ imageSrc, title, description, imageLink, buttonLink }) {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cards-container">
      <a href={imageLink} target="_blank" rel="noopener noreferrer">
        <img className="w-full rounded-t-lg card-image" src={imageSrc} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-lg text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-buttonColor hover:bg-h2Color hover:text-white"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

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
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
