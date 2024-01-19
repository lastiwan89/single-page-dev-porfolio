import ContactZod from "./components/pages/Contact-zod";
import Footer from "./components/pages/Footer";
import Hero from "./components/pages/Hero";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

export default function App() {
  return (
    <main className="mx-auto max-w-desktop bg-black-darker py-6 xl:py-10">
      <Hero />
      <Skills />
      <Project />
      <ContactZod />
      <Footer />
    </main>
  );
}
