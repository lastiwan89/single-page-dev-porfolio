import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="max-w-desktop mx-auto bg-black py-6 md:p-8 xl:px-40 xl:py-10">
      <Hero />
      <div className="bg-med-white mb-14 mt-20 h-[1px] w-full"></div>
      <Skills />
      <div className="bg-med-white mb-14 mt-20 h-[1px] w-full"></div>
      <Project />
      <Footer />
    </main>
  );
}
