import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CTA from "../components/CTA/CTA";
import About from "../components/About/About";
import Noticia from "../components/Noticia/Noticia";
import Cursos from "../components/Cursos/Cursos"
import Docentes from "../components/Docentes/Docentes";
import Anuncio from "../components/Anuncio/Anuncio";


export default function Home() {
  return (
    <>
    <main>
    <Header />
      <Banner/>
      <About />
      <CTA />
      <Cursos />
      <Anuncio />
      <Noticia />
      <Docentes />
    </main>
    </>
  );
}
