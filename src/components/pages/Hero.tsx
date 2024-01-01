import Button from "../Button";
import Divider from "../Divider";
import NavLink from "../Navlink";

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <div className="flex flex-col items-center pb-16 md:items-stretch">
          <div>
            <NavLink top="mr-6" />
            <div className="relative -mt-40 flex flex-col items-center md:items-end">
              <img
                className="z-0 w-52 md:absolute md:w-80 lg:right-16 xl:right-28"
                src="/image-profile-mobile.webp"
                alt="profile picture"
              />
            </div>
          </div>
          <div className="z-10 mt-8 flex flex-col gap-5 md:mt-28 md:w-[500px] md:gap-0 md:pl-6 lg:w-[700px] lg:pl-16 xl:pl-28">
            <h1 className="text-pure-white md:text-fs-72 md:-tracking-ls-2.045 md:leading-lh-72 text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold md:text-start">
              Nice to <br className="hidden md:block" /> meet you! I’m{" "}
              <span className="border-green border-b-4">Adam Keyes</span>.
            </h1>
            <p className="text-pure-white text-fs-16 md:text-fs-18 md:leading-lh-28 leading-lh-26 px-6 text-center md:mt-16 md:text-start">
              Based in the UK, I’m a front-end developer{" "}
              <br className="hidden md:block" /> passionate about building
              accessible web apps <br className="hidden md:block" /> that users
              love.
            </p>
          </div>
          <div className="mt-8 md:mt-11 md:pl-6 lg:pl-16 xl:pl-28">
            <Button />
          </div>
        </div>
        <div className="px-6 lg:px-16 xl:px-28">
          <Divider />
        </div>
      </div>
    </main>
  );
}
