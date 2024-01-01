import { ICONS } from "../constant";

export default function NavLink() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:px-6 lg:px-16">
        <div>
          <h3 className="text-pure-white text-fs-24 leading-lh-32 md:text-fs-32 -tracking-ls-0.333 md:-tracking-ls-0.444 font-bold">
            adamkeyes
          </h3>
        </div>
        <div className="flex items-center gap-6">
          {ICONS.map((icon) => (
            <img src={icon.url} alt={`${icon.label} icon`} />
          ))}
        </div>
      </div>
    </div>
  );
}
