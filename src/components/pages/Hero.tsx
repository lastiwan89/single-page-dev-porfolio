import Button from "../Button";
import Divider from "../Divider";
import NavLink from "../Navlink";

export default function Hero() {
  return (
    <main className="md:h-screen">
      <div className="hero">
        <div className="flex flex-col items-center pb-16 md:items-stretch">
          <div>
            <NavLink />
            <div className="relative -mt-40 flex flex-col items-center md:-mt-16 md:items-end">
              <img
                className="w-52 md:absolute md:w-80"
                src="/image-profile-mobile.webp"
                alt="profile picture"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <h1 className="text-pure-white text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold md:text-start">
              Nice to meet you! I’m{" "}
              <span className="border-green border-b-4">Adam Keyes</span>.
            </h1>
            <p className="text-pure-white text-fs-16 leading-lh-26 text-center md:text-start">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
          <div className="mt-8">
            <Button />
          </div>
        </div>
        <Divider />
      </div>
    </main>
  );
}
