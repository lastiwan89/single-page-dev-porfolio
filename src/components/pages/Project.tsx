import { PROJECT } from "../../constant";
import Button from "../Button";

export default function Project() {
  return (
    <section className="px-6">
      <div className="py-16">
        <div className="mb-8 flex justify-between">
          <h3 className="text-pure-white md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 text-fs-40 leading-lh-40 -tracking-ls-1.136 font-bold">
            Projects
          </h3>
          <Button />
        </div>

        {PROJECT.map((item) => (
          <div key={item.label}>
            <div className="mt-8 flex flex-col gap-2">
              <img src={item.url} alt={item.label} />
              <h4 className="text-pure-white text-fs-24 leading-lh-32 mt-2 font-bold uppercase">
                {item.label}
              </h4>
              <div className="flex gap-4">
                <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                  {item.tech.tech1}
                </p>
                <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                  {item.tech.tech2}
                </p>
                {"" || (
                  <p className="text-med-white text-fs-18 leading-lh-28 font-medium uppercase">
                    {item.tech.tech3}
                  </p>
                )}
              </div>
              <div className="flex gap-6">
                <p className="text-pure-white text-fs-16 leading-lh-26 hover:text-green tracking-ls2.286 border-green border-b-4 pb-2 text-center font-bold uppercase">
                  view project
                </p>
                <p className="text-pure-white text-fs-16 leading-lh-26 hover:text-green tracking-ls2.286 border-green border-b-4 pb-2 text-center font-bold uppercase">
                  view code
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
