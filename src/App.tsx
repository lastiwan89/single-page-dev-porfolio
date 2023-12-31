import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Hero from "./components/pages/Hero";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

export default function App() {
  return (
    <main className="max-w-desktop mx-auto bg-black py-6 md:p-8 xl:px-40 xl:py-10">
      <Hero />
      <div className="bg-med-white h-[1px] w-full"></div>
      <Skills />
      <div className="bg-med-white h-[1px] w-full"></div>
      <Project />
      <div className="bg-med-white h-[1px] w-full"></div>
      <Contact />
      <div className="bg-med-white h-[1px] w-full"></div>
      <Footer />
    </main>
  );
}
