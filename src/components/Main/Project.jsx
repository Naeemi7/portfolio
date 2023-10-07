import "../../styles/main.scss";

import yogaProject from "@images/project/yoga-project.png";
import todoProject from "@images/project/todo-project.png";

function Card({ imageSrc, title, description, imageLink, buttonLink }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cards-container">
      <a href={imageLink} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg card-image" src={imageSrc} alt="" />
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
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-buttonColor hover:bg-h1Color hover:text-gray-600 focus:bg-h2Color focus:text-white"
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
  );
}

function Project() {
  const posts = [
    {
      imageSrc: yogaProject,
      title: "Yoga and Meditation",
      description: `"Yoga and Meditation" is a web application designed to facilitate online yoga and meditation instruction classes.`,
      imageLink: "https://yoga-and-meditation.netlify.app/",
      buttonLink: "https://github.com/yoga-and-meditation/yoga-and-meditation/",
    },
    {
      imageSrc: todoProject,
      title: "TodoXpress",
      description:
        "TodoXpress is a Full Stack Todo List application built with the MERN stack (MongoDB, netlify serverless functions, React, and Node.js). It allows users to add, edit, delete, and mark tasks as done, providing a comprehensive task management solution.",
      imageLink: "https://todoxpress.netlify.app/",
      buttonLink: "https://github.com/Naeemi7/TodoXpress",
    },
    {
      imageSrc: yogaProject,
      description:
        "Learn how to become a pro in web development through expert insights and tips.",
      imageLink: "https://example.com/project3",
      buttonLink: "https://example.com/project3",
    },
    // ... (other post data)
  ];

  return (
    <div className="project-container">
      <div className="bg-gray-100 dark:bg-primary py-6 px-4 md:py-10 md:px-12">
        <div className="text-center mt-8 mb-11">
          <h2 className="text-4xl font-extrabold dark:text-h2Color">
            Projects
          </h2>
        </div>
        <div className="container mx-auto flex flex-row flex-wrap gap-8 justify-center">
          {posts.map((post, index) => (
            <Card key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;