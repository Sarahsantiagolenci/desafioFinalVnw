import Avatar from "./IMG_6223.jpeg";
import CV from "./CV_dev_Sarah.pdf";
import "./Style.scss";

function Home() {
  return (
    <>
      <header>
        <section className="sectionHome">
          <h1>Sarah Santiago Lenci</h1>
          <h2>Desenvolvedora front-end</h2>
        </section>

        <figure>
          <img src={Avatar} alt="foto" />
          <figcaption>
            <a href={CV} target="_blank">
              * Clique aqui e baixe meu CV *
            </a>
          </figcaption>
        </figure>
      </header>
    </>
  );
}

export default Home;
