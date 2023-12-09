import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Projeto1 from "./projeto1.png";
import Projeto2 from "./projeto2.png";
import Projeto3 from "./projeto3.png";
import Projeto4 from "./projeto4.png";

function Projects () {
  return (
    <>
      <section className="sectionProjects">
        <h4>Projetos</h4>
        <img src={Projeto1} alt="projeto 1" />
        <img src={Projeto2} alt="projeto 2" />
        <img src={Projeto3} alt="projeto 3" />
        <img src={Projeto4} alt="projeto 4" />
      </section>

      <section className="sectionContatos">
        <h2 className="contatos">Contatos</h2>
        <BiLogoGmail />

        <a href="https://www.linkedin.com/in/sarah-santiago-lenci-76367a1a2/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Sarahsantiagolenci">
          <FaGithub />
        </a>
      </section>

      <div className="divMsg">
        <input type="text" placeholder="Digite aqui sua mensagem" />
        <button>Enviar mensagem</button>
      </div>
    </>
  );
}

export default Projects;
