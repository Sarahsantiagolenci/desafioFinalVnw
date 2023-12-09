import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>{" "}
            </li>
            <li>
              <Link to="/About">Sobre mim</Link>
            </li>
            <li>
              <Link to="/Projects">Projetos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
