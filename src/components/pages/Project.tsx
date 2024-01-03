import { PROJECT } from "../../constant";
import Button from "../Button";

export default function Project() {
  return (
    <section className="px-6">
      <div className="py-16">
        <div className="mb-8 flex flex-col justify-between lg:px-10 xl:px-24">
          <div className="flex items-center justify-between">
            <h3 className="text-white-lighter text-fs-40 font-bold leading-lh-40 -tracking-ls-1.136 md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045">
              Projects
            </h3>
            <Button />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECT.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                <div className="overlay-box relative lg:hover:bg-black lg:hover:opacity-60">
                  <img
                    className="overlay-img"
                    src={item.url}
                    alt={`${item.label} image`}
                  />
                  <div className="overlay-text flex flex-col gap-8">
                    <Button text="view project" />
                    <Button text="view code" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white-lighter text-fs-24 font-bold uppercase leading-lh-32">
                    {item.label}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="text-white-darker text-fs-18 font-medium uppercase leading-lh-28">
                    {item.tech.tech1}
                  </p>
                  <p className="text-white-darker text-fs-18 font-medium uppercase leading-lh-28">
                    {item.tech.tech2}
                  </p>
                  <p className="text-white-darker text-fs-18 font-medium uppercase leading-lh-28">
                    {item.tech.tech3}
                  </p>
                </div>
                <div className="flex gap-4 lg:hidden">
                  <Button text="view project" />
                  <Button text="view code" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
