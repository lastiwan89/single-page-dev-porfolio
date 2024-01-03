import { ICONS } from "../constant";

export default function NavLink({ top }: { top?: string }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:px-6 lg:px-16 xl:px-28">
        <div>
          <h3 className="text-white-lighter cursor-pointer text-fs-24 font-bold leading-lh-32 -tracking-ls-0.333 md:text-fs-32 md:-tracking-ls-0.444">
            adamkeyes
          </h3>
        </div>
        <div className={`${top} flex items-center gap-6`}>
          {ICONS.map((icon) => (
            <img
              className="cursor-pointer"
              src={icon.url}
              alt={`${icon.label} icon`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
