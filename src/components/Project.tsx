import { PROJECT } from "../constant";
import Button from "./Button";

export default function Project() {
  return (
    <section className="px-6">
      <div className="flex justify-between">
        <h3 className="text-pure-white md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 text-fs-40 leading-lh-40 -tracking-ls-1.136 font-bold">
          Projects
        </h3>
        <Button />
      </div>
      <div>
        {PROJECT.map((item) => (
          <div key={item.label}>
            <div>
              <img src={item.url} alt={item.label} />
              <h4 className="text-pure-white uppercase">{item.label}</h4>
              <div className="flex gap-4">
                <p className="text-med-white uppercase">{item.tech.tech1}</p>
                <p className="text-med-white uppercase">{item.tech.tech2}</p>
                {"" || (
                  <p className="text-med-white uppercase">{item.tech.tech3}</p>
                )}
              </div>
              <div className="flex gap-6">
                <p className="text-pure-white uppercase">view project</p>
                <p className="text-pure-white uppercase">view code</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
