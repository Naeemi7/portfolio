import "../../styles/main.scss";
import skillAImages from "../../data/skill-images";

function Skills() {
  return (
    <div className="skills-main-container min-h-screen">
      <div className="skills-sub-container">
        <section className="content-container py-[30px]">
          <h2>My Skills</h2>
          <p>
            I use a combination of innovative development practices and reliable
            software engineering principles to build user-centered,
            high-performance, and responsive web applications. I am passionate
            about creating applications that are easy to use, fast, and
            accessible to everyone.
          </p>
        </section>

        <section className="skills-wrapper ">
          {skillAImages.map((item, index) => (
            <div className="skill" key={index}>
              <img
                className="skill-image"
                src={item.image}
                alt={`Skill ${index}`}
              />
              <p className="skill-title">{item.title}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
