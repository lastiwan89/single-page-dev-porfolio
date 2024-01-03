import { SKILL } from "../../constant";
import Divider from "../Divider";

export default function Skills() {
  return (
    <section>
      <div className="skill flex flex-col gap-6 px-6 pb-10 pt-16 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-12">
        {SKILL.map((item) => (
          <div
            key={item.label}
            className="mt-4 flex flex-col items-center justify-center gap-1 md:items-start md:gap-4 lg:px-10 xl:px-24"
          >
            <h3 className="text-white-lighter text-fs-32 font-bold leading-lh-40 -tracking-ls-1 md:text-fs-48 md:leading-lh-56 md:-tracking-ls-1.5">
              {item.label}
            </h3>
            <p className="text-white-darker text-fs-16 font-medium capitalize leading-lh-26 md:text-fs-18 md:leading-lh-28">
              {item.years}
            </p>
          </div>
        ))}
      </div>
      <div className="px-6 md:hidden">
        <Divider />
      </div>
    </section>
  );
}
