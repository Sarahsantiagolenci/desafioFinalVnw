import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import "./Style.scss";

function About() {
  return (
    <>
      <section className="sectionAbout">
        <h3>Sobre mim</h3>
        <p>
          Sou a Sarah, formada em Fisioterapia, pós graduada em Cuidados
          Críticos. Iniciei o curso em front-end com muitas expectativas de
          aprendizado e observo um grande crescimento na minha trajetória. Além
          de aprender sobre tecnologia, pude crescer em aprendizados de soft
          skills, conhecer novas pessoas, descobrir uma nova ótica de
          pensamento; entrar em uma nova área é desafiador e enriquecedor.
        </p>
      </section>

      <figure className="figureAbout">
        <h4>Tecnologias</h4>
        <div className="divIconsTec">
          <TiHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
          <FaSass />
        </div>
      </figure>
    </>
  );
}

export default About;
