import { PROJECT } from "../../constant";
import Button from "../Button";

export default function Project() {
  return (
    <section className="px-6">
      <div className="py-16">
        <div className="mb-8 flex flex-col justify-between lg:px-10">
          <div className="flex items-center justify-between">
            <h3 className="text-pure-white md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 text-fs-40 leading-lh-40 -tracking-ls-1.136 font-bold">
              Projects
            </h3>
            <Button />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECT.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                <div>
                  <img src={item.url} alt={`${item.label} image`} />
                </div>
                <div>
                  <h3 className="text-pure-white text-fs-24 leading-lh-32 font-bold uppercase">
                    {item.label}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                    {item.tech.tech1}
                  </p>
                  <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                    {item.tech.tech2}
                  </p>
                  <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                    {item.tech.tech3}
                  </p>
                </div>
                <div className="flex gap-4 lg:hidden lg:flex-col lg:items-center">
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
