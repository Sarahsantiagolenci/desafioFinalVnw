import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
// import Avatar from "./IMG_6223.jpeg"
import CV from "./CV_dev_Sarah.pdf"

function Start () {
    return (
        <>
       <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
            <Link to="/About">Sobre mim</Link>
            <Link to="/Projects">Projetos</Link>
          </li>
        </ul>
       </nav>
       <Routes>
      <Route path="/" element={ < Start /> } />
      <Route path="/About" element={ < About /> } />
      <Route path="/Projects" element={ < Projects /> } />
    </Routes>
       </BrowserRouter>

<h1>Sarah Santiago Lenci</h1>
<h2>Desenvolvedora front-end</h2>

{/* <figure>
  <img src={Avatar} alt="foto"></img>
</figure> */}

<a href={CV} download={true}>Baixe aqui meu CV /</a>

    </>
  )
}

export default Start