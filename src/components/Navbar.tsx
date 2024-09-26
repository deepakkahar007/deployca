import { NavLink } from "../constant";

const Navbar = () => {
  return (
    <header className="bg-blue sticky flex flex-col items-center justify-around p-2 shadow-md shadow-sky-400 lg:flex-row lg:justify-between">
      <div className="text-white lg:ml-6">Deployca Logo</div>
      <nav className="space-x-8">
        {NavLink.map(({ title, url }) => (
          <a
            key={title}
            href={url}
            className="font-sans font-medium uppercase text-white transition-all duration-500 hover:font-semibold lg:space-y-4"
          >
            {title}
          </a>
        ))}
      </nav>

      <div className="lg: hidden lg:mr-6 lg:flow-root">
        <input
          type="text"
          placeholder="Search"
          className="m-2 p-1 lg:rounded-2xl lg:text-black"
        />
      </div>
    </header>
  );
};

export default Navbar;
