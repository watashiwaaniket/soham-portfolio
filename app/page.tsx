import AboutMe from "./components/AboutMe";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Skills from "./components/Skills";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

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
