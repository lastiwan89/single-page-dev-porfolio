import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Hero from "./components/pages/Hero";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

export default function App() {
  return (
    <main className="bg-black-darker mx-auto max-w-desktop py-6 xl:py-10">
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
