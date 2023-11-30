import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects () {
    return (
        <>
        <section>
        <h4>Projetos</h4>
        <img src="https://github.com/Sarahsantiagolenci/desafio3m2vnw" alt="projeto 1" />
        <img src="https://github.com/Sarahsantiagolenci/calculadoraDeSoma" alt="projeto 2" />
        <img src="https://github.com/Sarahsantiagolenci/pizzaComReact" alt="projeto 3" />
        <img src="https://github.com/Sarahsantiagolenci/lampada" alt="projeto 4" />
        <img src="https://github.com/Sarahsantiagolenci/desafio-final-primeiro-modulo-vnw" alt="projeto 5" />
        </section>

      <section>
        <h2>Contatos</h2>
        < BiLogoGmail />
         <figcaption>sarahsantiagolenci@gmail.com</figcaption>
         
         <a href="https://www.linkedin.com/in/sarah-santiago-lenci-76367a1a2/"> 
         < FaLinkedin />
        </a> 

         <a href="https://github.com/Sarahsantiagolenci">
          < FaGithub />
         </a>
        
         <input type="text" placeholder="Digite aqui sua mensagem" />
         <button>Enviar mensagem</button>
         </section>
    </>
  )
}

export default Projects