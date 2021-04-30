import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Button from "../Button";

const PAGES = [
  { name: "home", to: "/" },
  { name: "projects", to: "/projects" },
  { name: "connect", to: "/connect" },
  { name: "events", to: "/events" },
];

const NavbarMedium = () => {
  return (
    <nav className="flex py-2 px-9 md:px-16 lg:px-20 items-center nav">
      <div className="w-12">
        <Link to="/" className="flex items-center  cursor-pointer">
          <img src={logo} alt="Logo devHead" className="w-12 lg:w-20" />
          <h3 className="ml-5 text-2xl lg:text-3xl font-bold nav__title">
            devHead
          </h3>
        </Link>
      </div>

      <ul className="flex ml-auto lg:space-x-8 nav__links">
        {PAGES.map((page) => (
          <li key={page.to} className="">
            <Link
              to={page.to}
              className="px-2 py-2 rounded-md text-gray-600 cursor-pointer font-medium capitalize nav__item"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* <button type="button" className="btn  rounded-md ease-in btn__join_us">
        Join Us
      </button> */}
      <Button
        varient="gradient1"
        className="ml-4 sm:hidden md:block md:ml-5 lg:ml-10"
      >
        Join Us
      </Button>
    </nav>
  );
};

export default NavbarMedium;
