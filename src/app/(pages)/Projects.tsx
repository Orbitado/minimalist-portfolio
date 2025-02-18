import Card from "@/components/common/Card";
import { gloobcamp, aipromptwizard, ecommerce } from "@/constants/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects">
        <Card project={gloobcamp} />
        <Card project={aipromptwizard} />
        <Card project={ecommerce} />
      </article>
    </section>
  );
}

export default Projects;
