import { SKILL } from "../../constant";
import Divider from "../Divider";

export default function Skills() {
  return (
    <section className="px-6">
      <div className="flex flex-col gap-6 px-6 py-16 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-12">
        {SKILL.map((item) => (
          <div
            key={item.label}
            className="mt-4 flex flex-col items-center justify-center gap-1 md:items-start md:gap-4"
          >
            <h3 className="text-pure-white md:text-fs-48 md:-tracking-ls-1.5 md:leading-lh-56 text-fs-32 leading-lh-40 -tracking-ls-1 font-bold">
              {item.label}
            </h3>
            <p className="text-med-white md:text-fs-18 md:leading-lh-28 text-fs-16 leading-lh-26 font-medium capitalize">
              {item.years}
            </p>
          </div>
        ))}
      </div>
      <Divider />
    </section>
  );
}
