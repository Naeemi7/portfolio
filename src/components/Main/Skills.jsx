import "../../styles/main.scss";
import skillAImages from "../../data/skill-images";

function Skills() {
  return (
    <div className="skills-main-container">
      <div className="skills-sub-container">
        <section className="content-container">
          <h2>My Skills</h2>
        </section>
        {/*  <h3>Web Development Skills</h3> */}
        <section className="skills-wrapper">
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
