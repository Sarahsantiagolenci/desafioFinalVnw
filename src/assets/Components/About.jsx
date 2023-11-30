import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";


function About () {
    return (
        <>
        <h3>Sobre mim</h3>
      <p>Sou a Sarah, formada em Fisioterapia, pós graduada em Cuidados Críticos, iniciei o curso em front-end com muitas expectativas de aprendizado e observo um grande crescimento na minha trajetória.</p>
      <h4>Tecnologias</h4>
      <figure>
        <TiHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaReact />
        <FaSass />
      </figure>
    </>
  )
}

export default About

