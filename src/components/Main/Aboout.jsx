import "../../styles/main.scss";
import skillAImages from "../../data/skill-images";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <section className="content-container">
          <h2>What I do</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            tempora iste est cum, error reprehenderit dolore rem, repudiandae
            fuga aut nulla ratione. Minima a sed accusantium, quod incidunt
            corrupti commodi error, praesentium, velit libero laboriosam? Sequi
            ipsa consectetur repellat, accusamus aliquid laborum totam ea facere
            officiis beatae alias harum non, corporis quam similique aliquam?
            Minima ullam quam fuga consectetur nobis illo voluptate obcaecati,
          </p>
        </section>

        <section className="skill-container">
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

export default About;
