import AboutMe from "./components/AboutMe";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutMe />
    <Experience />
    <Skills />
    <Footer />
    </>
  );
}
