import "../../styles/project.scss";
import projectData from "../../data/project-data";
import Seperator from "../Helper/Seperator";

function Project() {
  return (
    <>
      <Seperator />
      <div className="project-main-container">
        <h2>My Projects</h2>
        <div className="project-container">
          {projectData.map((item, index) => (
            <div key={index} className="project-cards">
              <div className="card-image-container">
                <img
                  src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
                  alt=""
                  className="card-image"
                />
              </div>
              <svg className="card-svg" viewBox="0 0 800 500">
                <path
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                  stroke="transparent"
                />
                <path
                  className="card-line"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                  stroke="pink"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>

              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="card-button">
                <a href={item.buttonLink}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
