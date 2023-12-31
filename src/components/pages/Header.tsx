import NavLink from "../Navlink";

export default function Header() {
  return (
    <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
      <NavLink />
      <div className="-mt-40">
        <img
          className="w-52 md:hidden"
          src="/image-profile-mobile.webp"
          alt="profile mobile"
        />
      </div>
    </div>
  );
}
