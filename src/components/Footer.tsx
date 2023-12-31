import { ICONS } from "../constant";

export default function Footer() {
  return (
    <footer>
      <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <h2 className="text-fs-24 leading-lh-32 text-pure-white tracking-ls-0.333 text-center font-sans font-bold">
          adamkeyes
        </h2>
        <div className="flex items-center justify-center gap-8">
          {ICONS.map((item) => (
            <img key={item.label} src={`${item.url}`} alt={item.label} />
          ))}
        </div>
      </div>
    </footer>
  );
}
