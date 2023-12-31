import Button from "../Button";
import Header from "./Header";

export default function Hero() {
  return (
    <main>
      <div className="hero flex flex-col items-center pb-16">
        <Header />
        <div className="flex flex-col gap-5 px-6">
          <h1 className="text-pure-white text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold">
            Nice to meet you! I’m{" "}
            <span className="border-green border-b-4">Adam Keyes</span>.
          </h1>
          <p className="text-pure-white text-fs-16 leading-lh-26 text-center">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
        <div className="mt-8">
          <Button />
        </div>
      </div>
    </main>
  );
}
